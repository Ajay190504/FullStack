// Task Scheduler App
class TaskScheduler {
    constructor() {
        this.tasks = this.loadTasks();
        this.history = this.loadHistory();
        this.currentFilter = 'all';
        this.currentSort = 'date-asc';
        this.currentTab = 'tasks';
        this.isFilterApplied = false;
        this.init();
    }

    init() {
        this.cacheDOM();
        this.bindEvents();
        this.render();
    }

    cacheDOM() {
        this.taskTitleInput = document.getElementById('taskTitle');
        this.taskDescriptionInput = document.getElementById('taskDescription');
        this.taskDateInput = document.getElementById('taskDate');
        this.taskTimeInput = document.getElementById('taskTime');
        this.taskPriorityInput = document.getElementById('taskPriority');
        this.taskCategoryInput = document.getElementById('taskCategory');
        this.addTaskBtn = document.getElementById('addTaskBtn');
        this.taskList = document.getElementById('taskList');
        this.historyList = document.getElementById('historyList');
        this.emptyState = document.getElementById('emptyState');
        this.emptyHistoryState = document.getElementById('emptyHistoryState');
        this.taskTemplate = document.getElementById('taskTemplate');
        this.historyTemplate = document.getElementById('historyTemplate');
        this.searchInput = document.getElementById('searchTasks');
        this.filterRadios = document.querySelectorAll('input[name="filter"]');
        this.sortSelect = document.getElementById('sortBy');
        this.historySortSelect = document.getElementById('historySortBy');
        this.clearHistoryBtn = document.getElementById('clearHistoryBtn');
        this.totalTasksEl = document.getElementById('totalTasks');
        this.completedTasksEl = document.getElementById('completedTasks');
        this.pendingTasksEl = document.getElementById('pendingTasks');
        this.mainTitle = document.getElementById('mainTitle');
        this.tabBtns = document.querySelectorAll('.tab-btn');
        this.tabContents = document.querySelectorAll('.tab-content');
    }

    bindEvents() {
        this.addTaskBtn.addEventListener('click', () => this.addTask());
        this.taskTitleInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTask();
        });
        
        this.filterRadios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                this.currentFilter = e.target.value;
                if (this.isFilterApplied) {
                    this.render();
                }
            });
        });

        this.sortSelect.addEventListener('change', (e) => {
            this.currentSort = e.target.value;
            if (this.isFilterApplied) {
                this.render();
            }
        });

        this.historySortSelect.addEventListener('change', () => {
            this.render();
        });

        this.clearHistoryBtn.addEventListener('click', () => this.clearAllHistory());
        document.getElementById('applyFilterBtn').addEventListener('click', () => this.applyFilter());
        document.getElementById('resetFilterBtn').addEventListener('click', () => this.resetFilters());

        this.searchInput.addEventListener('input', () => this.render());

        // Tab switching
        this.tabBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });
    }

    switchTab(tabName) {
        this.currentTab = tabName;
        
        // Update tab buttons
        this.tabBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tabName);
        });

        // Update tab contents
        this.tabContents.forEach(content => {
            content.classList.toggle('active', content.id === `${tabName}Tab`);
        });

        // Update main title
        this.mainTitle.textContent = tabName === 'tasks' ? 'Tasks' : 'Task History';

        // Update filter section visibility
        document.getElementById('filterSection').classList.toggle('active', tabName === 'tasks');
        document.getElementById('historyFilterSection').classList.toggle('active', tabName === 'history');

        this.render();
    }

    addTask() {
        const title = this.taskTitleInput.value.trim();
        const description = this.taskDescriptionInput.value.trim();
        const date = this.taskDateInput.value;
        const time = this.taskTimeInput.value;
        const priority = this.taskPriorityInput.value;
        const category = this.taskCategoryInput.value;

        if (!title) {
            alert('Please enter a task title');
            this.taskTitleInput.focus();
            return;
        }

        const task = {
            id: Date.now(),
            title,
            description,
            date,
            time,
            priority,
            category,
            completed: false,
            createdAt: new Date().toISOString()
        };

        this.tasks.unshift(task);
        this.saveTasks();
        this.clearForm();
        this.render();
    }

    deleteTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task && confirm('Are you sure you want to delete this task?')) {
            this.tasks = this.tasks.filter(t => t.id !== id);
            
            // Add to history
            const historyItem = {
                id: Date.now(),
                ...task,
                originalId: task.id,
                status: task.completed ? 'completed' : 'deleted',
                deletedAt: new Date().toISOString()
            };
            this.history.unshift(historyItem);
            
            this.saveTasks();
            this.saveHistory();
            this.render();
        }
    }

    toggleComplete(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            
            // If marking as complete, add to history
            if (task.completed) {
                const historyItem = {
                    id: Date.now(),
                    ...task,
                    originalId: task.id,
                    status: 'completed',
                    completedAt: new Date().toISOString()
                };
                this.history.unshift(historyItem);
                this.saveHistory();
            }
            
            this.saveTasks();
            this.render();
        }
    }

    editTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (!task) return;

        this.taskTitleInput.value = task.title;
        this.taskDescriptionInput.value = task.description;
        this.taskDateInput.value = task.date;
        this.taskTimeInput.value = task.time;
        this.taskPriorityInput.value = task.priority;
        this.taskCategoryInput.value = task.category;
        this.taskTitleInput.focus();

        this.deleteTask(id);
    }

    clearForm() {
        this.taskTitleInput.value = '';
        this.taskDescriptionInput.value = '';
        this.taskDateInput.value = '';
        this.taskTimeInput.value = '';
        this.taskPriorityInput.value = 'medium';
        this.taskCategoryInput.value = 'work';
    }

    filterTasks() {
        let filtered = this.tasks;

        // Apply status filter
        if (this.currentFilter === 'completed') {
            filtered = filtered.filter(t => t.completed);
        } else if (this.currentFilter === 'pending') {
            filtered = filtered.filter(t => !t.completed);
        }

        // Apply search filter
        const searchTerm = this.searchInput.value.toLowerCase();
        if (searchTerm) {
            filtered = filtered.filter(t => 
                t.title.toLowerCase().includes(searchTerm) ||
                t.description.toLowerCase().includes(searchTerm)
            );
        }

        return filtered;
    }

    sortTasks(tasks) {
        const sorted = [...tasks];

        switch (this.currentSort) {
            case 'date-asc':
                sorted.sort((a, b) => {
                    if (!a.date) return 1;
                    if (!b.date) return -1;
                    return new Date(a.date) - new Date(b.date);
                });
                break;
            case 'date-desc':
                sorted.sort((a, b) => {
                    if (!a.date) return -1;
                    if (!b.date) return 1;
                    return new Date(b.date) - new Date(a.date);
                });
                break;
            case 'priority':
                const priorityOrder = { high: 0, medium: 1, low: 2 };
                sorted.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
                break;
            case 'created':
                sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                break;
        }

        return sorted;
    }

    formatDate(dateString) {
        if (!dateString) return '';
        const date = new Date(dateString + 'T00:00:00');
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }

    formatTime(timeString) {
        if (!timeString) return '';
        const [hours, minutes] = timeString.split(':');
        const hour = parseInt(hours);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour % 12 || 12;
        return `${displayHour}:${minutes} ${ampm}`;
    }

    getCategoryEmoji(category) {
        const emojis = {
            work: '💼',
            personal: '👤',
            health: '🏥',
            shopping: '🛒',
            other: '📌'
        };
        return emojis[category] || '📌';
    }

    updateStatistics() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(t => t.completed).length;
        const pending = total - completed;

        this.totalTasksEl.textContent = total;
        this.completedTasksEl.textContent = completed;
        this.pendingTasksEl.textContent = pending;
    }

    clearAllHistory() {
        if (confirm('Are you sure you want to clear all history? This cannot be undone.')) {
            this.history = [];
            this.saveHistory();
            this.render();
        }
    }

    restoreFromHistory(historyId) {
        const historyItem = this.history.find(h => h.id === historyId);
        if (!historyItem) return;

        // Create new task from history item
        const restoredTask = {
            id: Date.now(),
            title: historyItem.title,
            description: historyItem.description,
            date: historyItem.date,
            time: historyItem.time,
            priority: historyItem.priority,
            category: historyItem.category,
            completed: false,
            createdAt: new Date().toISOString()
        };

        this.tasks.unshift(restoredTask);
        this.history = this.history.filter(h => h.id !== historyId);
        
        this.saveTasks();
        this.saveHistory();
        this.render();
    }

    removeFromHistory(historyId) {
        if (confirm('Remove this item from history?')) {
            this.history = this.history.filter(h => h.id !== historyId);
            this.saveHistory();
            this.render();
        }
    }

    resetFilters() {
        // Reset filter to 'all'
        document.querySelector('input[name="filter"][value="all"]').checked = true;
        this.currentFilter = 'all';
        
        // Reset sort to 'date-asc'
        this.sortSelect.value = 'date-asc';
        this.currentSort = 'date-asc';
        
        // Clear search
        this.searchInput.value = '';
        
        // Hide filtered tasks section
        this.isFilterApplied = false;
        document.getElementById('filteredTasksSection').style.display = 'none';
        
        this.render();
    }

    applyFilter() {
        this.isFilterApplied = true;
        
        // Show filtered tasks section in sidebar
        const filteredTasksSection = document.getElementById('filteredTasksSection');
        filteredTasksSection.style.display = 'block';
        
        // Get filter summary
        const filterType = document.querySelector('input[name="filter"]:checked').value;
        const sortType = this.sortSelect.value;
        const filtered = this.filterTasks();
        const sorted = this.sortTasks(filtered);
        
        const filteredTasksList = document.getElementById('filteredTasksList');
        filteredTasksList.innerHTML = '';
        
        if (sorted.length === 0) {
            filteredTasksList.innerHTML = '<p style="text-align: center; color: var(--text-light);">No tasks found</p>';
        } else {
            sorted.forEach(task => {
                const taskCard = document.createElement('div');
                taskCard.className = `filtered-task-card ${task.completed ? 'completed' : ''}`;
                
                const dueInfo = task.date ? `${this.formatDate(task.date)}${task.time ? ' ' + this.formatTime(task.time) : ''}` : 'No due date';
                const createdDate = new Date(task.createdAt).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric'
                });
                
                taskCard.innerHTML = `
                    <div class="filtered-task-title">${task.title}</div>
                    <div class="filtered-task-info">
                        <div class="filtered-task-info-item">📝 ${task.description ? task.description.substring(0, 30) + (task.description.length > 30 ? '...' : '') : 'No description'}</div>
                        <div class="filtered-task-info-item">📅 Due: ${dueInfo}</div>
                        <div class="filtered-task-info-item">📝 Created: ${createdDate}</div>
                        <div class="filtered-task-info-item">Status: ${task.completed ? '✅ Completed' : '⏳ Pending'}</div>
                    </div>
                `;
                
                filteredTasksList.appendChild(taskCard);
            });
        }
        
        this.render();
    }

    render() {
        if (this.currentTab === 'tasks') {
            this.renderTasks();
        } else {
            this.renderHistory();
        }
    }

    renderTasks() {
        const filtered = this.filterTasks();
        const sorted = this.sortTasks(filtered);

        this.taskList.innerHTML = '';

        if (sorted.length === 0) {
            this.emptyState.style.display = 'block';
        } else {
            this.emptyState.style.display = 'none';
            sorted.forEach(task => {
                const taskEl = this.createTaskElement(task);
                this.taskList.appendChild(taskEl);
            });
        }

        this.updateStatistics();
    }

    renderHistory() {
        let history = this.history;
        const historySortBy = this.historySortSelect.value;

        // Sort history
        switch (historySortBy) {
            case 'date-desc':
                history = history.sort((a, b) => new Date(b.completedAt || b.deletedAt) - new Date(a.completedAt || a.deletedAt));
                break;
            case 'date-asc':
                history = history.sort((a, b) => new Date(a.completedAt || a.deletedAt) - new Date(b.completedAt || b.deletedAt));
                break;
            case 'name':
                history = history.sort((a, b) => a.title.localeCompare(b.title));
                break;
        }

        this.historyList.innerHTML = '';

        if (history.length === 0) {
            this.emptyHistoryState.style.display = 'block';
        } else {
            this.emptyHistoryState.style.display = 'none';
            history.forEach(item => {
                const historyEl = this.createHistoryDetailElement(item);
                if (historyEl) {
                    this.historyList.appendChild(historyEl);
                }
            });
        }
    }

    createTaskElement(task) {
        const clone = this.taskTemplate.content.cloneNode(true);
        const taskCard = clone.querySelector('.task-card');
        
        taskCard.dataset.taskId = task.id;
        taskCard.dataset.priority = task.priority;
        
        if (task.completed) {
            taskCard.classList.add('completed');
        }

        // Set content
        clone.querySelector('.task-title').textContent = task.title;
        clone.querySelector('.task-description').textContent = task.description;
        clone.querySelector('.date-value').textContent = this.formatDate(task.date);
        clone.querySelector('.time-value').textContent = this.formatTime(task.time);
        
        const categorySpan = clone.querySelector('.task-category');
        categorySpan.textContent = `${this.getCategoryEmoji(task.category)} ${task.category.charAt(0).toUpperCase() + task.category.slice(1)}`;

        // Checkbox
        const checkbox = clone.querySelector('.task-complete');
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => this.toggleComplete(task.id));

        // Buttons
        clone.querySelector('.btn-edit').addEventListener('click', () => this.editTask(task.id));
        clone.querySelector('.btn-delete').addEventListener('click', () => this.deleteTask(task.id));

        return clone;
    }

    createHistoryElement(historyItem) {
        const clone = this.historyTemplate.content.cloneNode(true);
        const historyCard = clone.querySelector('.history-card');
        
        historyCard.dataset.historyId = historyItem.id;

        // Set content
        clone.querySelector('.history-title').textContent = historyItem.title;
        clone.querySelector('.history-description').textContent = historyItem.description;
        clone.querySelector('.history-date-value').textContent = this.formatDate(historyItem.date);
        clone.querySelector('.history-time-value').textContent = this.formatTime(historyItem.time);
        
        const categorySpan = clone.querySelector('.history-category');
        categorySpan.textContent = `${this.getCategoryEmoji(historyItem.category)} ${historyItem.category.charAt(0).toUpperCase() + historyItem.category.slice(1)}`;

        // Status badge
        const statusSpan = clone.querySelector('.history-status');
        if (historyItem.status === 'completed') {
            statusSpan.textContent = '✅ Completed';
            statusSpan.style.background = 'var(--success-color)';
        } else {
            statusSpan.textContent = '🗑️ Deleted';
            statusSpan.style.background = 'var(--danger-color)';
        }

        // Completed date
        const completedDateEl = clone.querySelector('.completed-date-value');
        if (historyItem.completedAt || historyItem.deletedAt) {
            const dateToShow = historyItem.completedAt || historyItem.deletedAt;
            completedDateEl.textContent = new Date(dateToShow).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        }

        // Buttons
        clone.querySelector('.btn-restore').addEventListener('click', () => this.restoreFromHistory(historyItem.id));
        clone.querySelector('.btn-remove-history').addEventListener('click', () => this.removeFromHistory(historyItem.id));

        return clone;
    }

    createHistoryDetailElement(historyItem) {
        const clone = this.historyTemplate.content.cloneNode(true);
        const historyCard = clone.querySelector('.history-detail-card');
        
        if (!historyCard) return null;
        
        historyCard.dataset.historyId = historyItem.id;

        // Set title and status
        clone.querySelector('.history-detail-title').textContent = historyItem.title;
        
        const statusSpan = clone.querySelector('.history-detail-status');
        if (historyItem.status === 'completed') {
            statusSpan.textContent = '✅ Completed';
            statusSpan.style.background = 'var(--success-color)';
        } else {
            statusSpan.textContent = '🗑️ Deleted';
            statusSpan.style.background = 'var(--danger-color)';
        }

        // Description
        clone.querySelector('.history-detail-description').textContent = historyItem.description || 'No description';

        // Details
        clone.querySelector('.due-date-value').textContent = this.formatDate(historyItem.date) || 'Not set';
        clone.querySelector('.due-time-value').textContent = this.formatTime(historyItem.time) || 'Not set';
        
        const categorySpan = clone.querySelector('.history-detail-category');
        categorySpan.textContent = `${this.getCategoryEmoji(historyItem.category)} ${historyItem.category.charAt(0).toUpperCase() + historyItem.category.slice(1)}`;

        const prioritySpan = clone.querySelector('.history-detail-priority');
        prioritySpan.textContent = historyItem.priority.charAt(0).toUpperCase() + historyItem.priority.slice(1);

        // Completed/Deleted date
        const completedDateEl = clone.querySelector('.completed-date-value');
        if (historyItem.completedAt || historyItem.deletedAt) {
            const dateToShow = historyItem.completedAt || historyItem.deletedAt;
            completedDateEl.textContent = new Date(dateToShow).toLocaleString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        }

        // Created date
        const createdDateEl = clone.querySelector('.created-date-value');
        createdDateEl.textContent = new Date(historyItem.createdAt).toLocaleString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        // Buttons
        clone.querySelector('.btn-restore').addEventListener('click', () => this.restoreFromHistory(historyItem.id));
        clone.querySelector('.btn-remove-history').addEventListener('click', () => this.removeFromHistory(historyItem.id));

        return clone;
    }

    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    loadTasks() {
        const saved = localStorage.getItem('tasks');
        return saved ? JSON.parse(saved) : [];
    }

    saveHistory() {
        localStorage.setItem('taskHistory', JSON.stringify(this.history));
    }

    loadHistory() {
        const saved = localStorage.getItem('taskHistory');
        return saved ? JSON.parse(saved) : [];
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new TaskScheduler();
});
