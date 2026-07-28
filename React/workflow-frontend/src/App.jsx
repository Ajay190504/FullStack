import { useState } from "react";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import "./App.css";

export default function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [refresh, setRefresh] = useState(false);

  // Called when Edit button is clicked
  const handleEdit = (user) => {
    setSelectedUser(user);

    // Scroll to form
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Called after Add/Update
  const handleSave = () => {
    setSelectedUser(null);
    setRefresh((prev) => !prev);
  };

  // Called when Reset button is clicked while editing
  const handleCancelEdit = () => {
    setSelectedUser(null);
  };

  return (
    <div className="container">
      <h1>React CRUD Application</h1>

      <UserForm
        selectedUser={selectedUser}
        onSave={handleSave}
        onCancelEdit={handleCancelEdit}
      />

      <hr />

      <UserTable
        onEdit={handleEdit}
        refresh={refresh}
      />
    </div>
  );
}