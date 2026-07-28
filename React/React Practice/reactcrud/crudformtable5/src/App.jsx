import React, { useState } from "react";

function EmployeeList() {
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    role: "",
    salary: "",
  });

  const [allEmployees, setAllEmployees] = useState([]);
  const [editId, setEditId] = useState(null);

  function handleChange(e) {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (editId === null) {
      // Check for duplicate ID
      const existingEmployee = allEmployees.find(
        (emp) => emp.id === employee.id
      );

      if (existingEmployee) {
        const choice = window.confirm(
          "Employee ID already exists.\nDo you want to update the existing employee?"
        );

        if (choice) {
          setEmployee(existingEmployee);
          setEditId(existingEmployee.id);
        }

        return;
      }

      // Add Employee
      setAllEmployees([...allEmployees, employee]);

      alert("Employee Added Successfully.");
    } else {
      // Confirm Update
      const choice = window.confirm(
        "Are you sure you want to update this employee?"
      );

      if (!choice) {
        return;
      }

      // Update Employee
      setAllEmployees(
        allEmployees.map((emp) =>
          emp.id === editId ? employee : emp
        )
      );

      alert("Employee Updated Successfully.");

      setEditId(null);
    }

    setEmployee({
      id: "",
      name: "",
      role: "",
      salary: "",
    });
  }

  function handleUpdate(emp) {
    setEmployee(emp);
    setEditId(emp.id);
  }

  function handleDelete(id) {
    const choice = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!choice) {
      return;
    }

    setAllEmployees(allEmployees.filter((emp) => emp.id !== id));

    if (editId === id) {
      setEditId(null);

      setEmployee({
        id: "",
        name: "",
        role: "",
        salary: "",
      });
    }

    alert("Employee Deleted Successfully.");
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to List App</h1>

      <h2>Add / Update Employee Form</h2>

      <form onSubmit={handleSubmit}>
        <table style={{ margin: "auto" }}>
          <tbody>
            <tr>
              <td>Enter Id :</td>
              <td>
                <input
                  type="number"
                  name="id"
                  value={employee.id}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td>Enter Name :</td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={employee.name}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td>Enter Role :</td>
              <td>
                <input
                  type="text"
                  name="role"
                  value={employee.role}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td>Enter Salary :</td>
              <td>
                <input
                  type="number"
                  name="salary"
                  value={employee.salary}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                <button type="submit">
                  {editId === null
                    ? "Add Employee"
                    : "Update Employee"}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      <h2>All Employees</h2>

      <table
        border="1"
        cellPadding="5"
        style={{ margin: "auto", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>ROLE</th>
            <th>SALARY</th>
            <th colSpan="2">ACTION</th>
          </tr>
        </thead>

        <tbody>
          {allEmployees.length === 0 ? (
            <tr>
              <td colSpan="6">No Employees Found</td>
            </tr>
          ) : (
            allEmployees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.role}</td>
                <td>{emp.salary}</td>

                <td>
                  <button onClick={() => handleDelete(emp.id)}>
                    Delete
                  </button>
                </td>

                <td>
                  <button onClick={() => handleUpdate(emp)}>
                    Update
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;