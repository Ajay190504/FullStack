import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../api/userApi";

export default function UserTable({ onEdit, refresh }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, [refresh]);

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load users.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) return;

    try {
      await deleteUser(id);
      alert("User deleted successfully.");
      fetchUsers();
    } catch (error) {
      console.error(error);
      alert("Failed to delete user.");
    }
  };

  if (loading) {
    return <h3>Loading users...</h3>;
  }

  return (
    <div className="table-container">
      <h2>User List</h2>

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>City</th>
            <th width="180">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="8" style={{ textAlign: "center" }}>
                No user data available.
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>

                <td>{user.name}</td>

                <td>{user.email}</td>

                <td>{user.age}</td>

                <td>{user.gender}</td>

                <td>{user.phone}</td>

                <td>{user.city}</td>

                <td>
                  <button
                    onClick={() => onEdit(user)}
                    style={{ marginRight: "10px" }}
                  >
                    Edit
                  </button>

                  <button onClick={() => handleDelete(user.id)}>
                    Delete
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