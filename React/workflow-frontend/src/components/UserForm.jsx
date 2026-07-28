// src/components/UserForm.jsx

import { useEffect, useState } from "react";
import { addUser, updateUser } from "../api/userApi";
import validateUser from "../utils/validation";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  age: "",
  gender: "",
  phone: "",
  city: "",
};

export default function UserForm({
  selectedUser,
  onSave,
  onCancelEdit,
}) {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedUser) {
      setFormData({
        name: selectedUser.name || "",
        email: selectedUser.email || "",
        password: selectedUser.password || "",
        confirmPassword: selectedUser.password || "",
        age: selectedUser.age || "",
        gender: selectedUser.gender || "",
        phone: selectedUser.phone || "",
        city: selectedUser.city || "",
      });

      setErrors({});
    } else {
      resetForm();
    }
  }, [selectedUser]);

  const resetForm = () => {
    setFormData(initialState);
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateUser(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);

      const user = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        age: Number(formData.age),
        gender: formData.gender,
        phone: formData.phone,
        city: formData.city,
      };

      if (selectedUser) {
        await updateUser(selectedUser.id, user);
        alert("User updated successfully.");
      } else {
        await addUser(user);
        alert("User added successfully.");
      }

      resetForm();
      onSave();
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>{selectedUser ? "Update User" : "Add User"}</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Name</label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <small className="error">{errors.name}</small>
        </div>

        <div>
          <label>Email</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <small className="error">{errors.email}</small>
        </div>

        <div>
          <label>Password</label>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <small className="error">{errors.password}</small>
        </div>

        <div>
          <label>Confirm Password</label>

          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <small className="error">{errors.confirmPassword}</small>
        </div>

        <div>
          <label>Age</label>

          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />

          <small className="error">{errors.age}</small>
        </div>

        <div>
          <label>Gender</label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />
            Female
          </label>

          <small className="error">{errors.gender}</small>
        </div>

        <div>
          <label>Phone</label>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <small className="error">{errors.phone}</small>
        </div>

        <div>
          <label>City</label>

          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
          >
            <option value="">Select City</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Nagpur">Nagpur</option>
            <option value="Solapur">Solapur</option>
            <option value="Nashik">Nashik</option>
          </select>

          <small className="error">{errors.city}</small>
        </div>

        <br />

        <button type="submit" disabled={loading}>
          {loading
            ? "Please wait..."
            : selectedUser
            ? "Update User"
            : "Add User"}
        </button>

        <button
          type="button"
          onClick={() => {
            resetForm();
            onCancelEdit();
          }}
        >
          Reset
        </button>

      </form>
    </div>
  );
}