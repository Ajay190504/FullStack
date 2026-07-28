import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const API_URL = "http://localhost:3000/employees";

  const emptyEmployee = {
    name: "",
    email: "",
    password: "",
    salary: 0,
    role: "",
  };

  const [employee, setEmployee] = useState(emptyEmployee);
  const [allEmployees, setAllEmployee] = useState([]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setEmployee((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const fetchEmployees = async () => {
    try {
      const { data } = await axios.get(API_URL);
      setAllEmployee(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (employee.id) {
        // UPDATE
        await axios.put(`${API_URL}/${employee.id}`, employee);
      } else {
        // CREATE
        await axios.post(API_URL, employee);
      }

      await fetchEmployees();
      setEmployee(emptyEmployee);
    } catch (err) {
      console.log(err);
    }
  };

  const editEmployee = (emp) => {
    setEmployee(emp);
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);

      await fetchEmployees();

      if (employee.id === id) {
        setEmployee(emptyEmployee);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <center>
      <div>
        <h2>Employee Form</h2>

        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={employee.password}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <label>Salary:</label>
          <input
            type="number"
            name="salary"
            value={employee.salary}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <label>Role:</label>
          <input
            type="text"
            name="role"
            value={employee.role}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <button type="submit">
            {employee.id ? "Update Employee" : "Create Employee"}
          </button>

          {employee.id && (
            <>
              {" "}
              <button
                type="button"
                onClick={() => setEmployee(emptyEmployee)}
              >
                Cancel
              </button>
            </>
          )}
        </form>
      </div>

      <hr />

      <div>
        <h2>Employee Records</h2>

        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Salary</th>
              <th>Role</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {allEmployees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.password}</td>
                <td>{emp.salary}</td>
                <td>{emp.role}</td>

                <td>
                  <button onClick={() => editEmployee(emp)}>
                    Edit
                  </button>
                </td>

                <td>
                  <button onClick={() => deleteEmployee(emp.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </center>
  );
}

export default App;