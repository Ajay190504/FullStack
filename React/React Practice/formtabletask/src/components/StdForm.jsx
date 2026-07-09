import React, { useState } from "react";

const StdForm = () => {
  const emptyStudent = {
    rollNo: "",
    name: "",
    maths: "",
    physics: "",
    chemistry: "",
  };

  const [student, setStudent] = useState(emptyStudent);
  const [allStudents, setAllStudents] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);

  const clearForm = () => {
    setStudent(emptyStudent);
    setIsUpdating(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isUpdating) {
      const confirmUpdate = window.confirm(
        "Are you sure you want to update this student?"
      );

      if (!confirmUpdate) return;

      const updatedStudents = allStudents.map((stud) =>
        stud.rollNo === student.rollNo ? student : stud
      );

      setAllStudents(updatedStudents);

      alert("Student updated successfully!");

      clearForm();
      return;
    }

    const existingStudent = allStudents.find(
      (stud) => stud.rollNo === student.rollNo
    );

    if (existingStudent) {
      const wantUpdate = window.confirm(
        "Student with this Roll Number already exists.\nDo you want to update the existing student?"
      );

      if (wantUpdate) {
        setStudent(existingStudent);
        setIsUpdating(true);
      }

      return;
    }

    const wantAdd = window.confirm(
      "Are you sure you want to add this student?"
    );

    if (!wantAdd) return;

    setAllStudents([...allStudents, student]);

    alert("Student added successfully!");

    clearForm();
  };

  const handleDelete = (rollNo) => {
    const wantDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!wantDelete) return;

    const studentList = allStudents.filter(
      (stud) => stud.rollNo !== rollNo
    );

    setAllStudents(studentList);

    if (isUpdating && student.rollNo === rollNo) {
      clearForm();
    }

    alert("Student deleted successfully!");
  };

  const handleEdit = (rollNo) => {
    const selectedStudent = allStudents.find(
      (stud) => stud.rollNo === rollNo
    );

    if (!selectedStudent) return;

    setStudent(selectedStudent);
    setIsUpdating(true);
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setStudent({
      ...student,
      [name]:
        type === "number" && value !== ""
          ? Number(value)
          : value,
    });
  };

  return (
    <div>
      <h1>Student Details Form</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="inpRoll">Roll No: </label>
        <input
          id="inpRoll"
          type="number"
          name="rollNo"
          value={student.rollNo}
          placeholder="Enter Roll No"
          onChange={handleChange}
          required
          disabled={isUpdating}
        />

        <br />
        <br />

        <label htmlFor="inpName">Name: </label>
        <input
          id="inpName"
          type="text"
          name="name"
          value={student.name}
          placeholder="Enter Your Name"
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <label htmlFor="inpMaths">Math Marks: </label>
        <input
          id="inpMaths"
          type="number"
          name="maths"
          value={student.maths}
          placeholder="Enter Maths Marks"
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <label htmlFor="inpPhysics">Physics Marks: </label>
        <input
          id="inpPhysics"
          type="number"
          name="physics"
          value={student.physics}
          placeholder="Enter Physics Marks"
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <label htmlFor="inpChemistry">Chemistry Marks: </label>
        <input
          id="inpChemistry"
          type="number"
          name="chemistry"
          value={student.chemistry}
          placeholder="Enter Chemistry Marks"
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="submit"
          value={isUpdating ? "Update Student" : "Add Student"}
        />
      </form>

      <h1>Student Records</h1>

            <table border="2" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Maths</th>
            <th>Physics</th>
            <th>Chemistry</th>
            <th>Total</th>
            <th>Percentage</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {allStudents.length === 0 ? (
            <tr>
              <td colSpan="8" align="center">
                No Student Records Found
              </td>
            </tr>
          ) : (
            allStudents.map((student) => {
              const total =
                student.maths +
                student.physics +
                student.chemistry;

              const percentage = (total / 300) * 100;

              return (
                <tr key={student.rollNo}>
                  <td>{student.rollNo}</td>
                  <td>{student.name}</td>
                  <td>{student.maths}</td>
                  <td>{student.physics}</td>
                  <td>{student.chemistry}</td>
                  <td>{total}</td>
                  <td>{percentage.toFixed(2)}%</td>

                  <td>
                    <button
                      onClick={() =>
                        handleEdit(student.rollNo)
                      }
                    >
                      Update
                    </button>

                    {" "}

                    <button
                      onClick={() =>
                        handleDelete(student.rollNo)
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StdForm;