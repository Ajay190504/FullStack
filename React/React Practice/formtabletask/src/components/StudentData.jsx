import React, { useState } from 'react'

const StudentData = () => {

   const emptyStudent = {
      rollNo: "",
      name: "",
      maths: "",
      physics: "",
      chemistry: "",
   };

   const [student, setStudent] = useState(emptyStudent);
   const [allStudents, setAllStudents] = useState([]);

   function clearForm() {
      setStudent(emptyStudent);
   }

   const handleSubmit = (e) => {
      e.preventDefault();

      const existingStudent = allStudents.find((stud)=> stud.rollNo === student.rollNo);

      if(existingStudent){
         const wantUpdate = window.confirm('Student with this Roll NO. already exists. Want to update it ?');

         if(wantUpdate){
            setStudent(student);

            alert('Student Updated Successfully !!!')
         }
         else{
            return;
         }
      }
      else{
      const wantAdd = window.confirm('Want to Add this Student ?');

      if(wantAdd){
        setAllStudents([...allStudents, student]);
        alert('Student Added Successfully !!!')
        clearForm();
      }
      return;
   }
   };

   // const handleUpdate = (rollNo) => {
   //    const wantUpdate = window.confirm("Want to update this Student ?")

   //    if(wantUpdate){
   //       const selectedStudent = allStudents.find((stud)=>{
   //          stud.rollNo == rollNo;
   //       });
   //       setStudent(selectedStudent);
   //    }
   //    else{
   //       return;
   //    }
   // }

   const handleDelete = (rollNo) => {
      const wantDelete = window.confirm('Want to Delete This Student ?');

      if(wantDelete){

        const updatedAllStudents = allStudents.filter((student)=>{
            student.rollNo !== rollNo;
         });
         setAllStudents(updatedAllStudents);

         alert('Student Deleted Successfully !!!')
      }
      else{
         return;
      }
   };

   const handleChange = (e) => {
      let {name, value, type} = e.target;

      setStudent({...student, [name]: type==="number" && value !== "" ? Number(value) : value, });
   };

  return (
    <div>
      <h1>Student Form: </h1>

         <form onSubmit={handleSubmit}>

            <label htmlFor='inpRoll'>Roll No: </label>
            <input type="text" id='inpRoll' name='rollNo' value={student.rollNo} onChange={handleChange} required/>

            <br />
            <br />

            <label htmlFor="inpName">Name: </label>
            <input type="text" id='inpName' name='name' value={student.name} onChange={handleChange} required/>

            <br />
            <br />
            
            <label htmlFor="inpMaths">Maths: </label>
            <input type="number" id='inpMaths' name='maths' value={student.maths} onChange={handleChange} required />

            <br />
            <br />
            
            <label htmlFor="inpPhysics">Physics: </label>
            <input type="number" id='inpPhysics' name='physics' value={student.physics} onChange={handleChange} required />

            <br />
            <br />
            
            <label htmlFor="inpChemistry">Chemistry: </label>
            <input type="number" id='inpChemistry' name='chemistry' value={student.chemistry} onChange={handleChange} required />
            
            <br />
            <br />

            <input type="submit" />
            
         </form>

         <h1>Student Records: </h1>

         <table border='2' cellPadding='10'>
            <thead>
               <tr>
                  <th>RollNo</th>
                  <th>Name</th>
                  <th>Maths</th>
                  <th>Physics</th>
                  <th>Chemistry</th>
                  <th>Total</th>
                  <th>Percentage</th>
                  <th>Remove</th>
                  <th>Update</th>
               </tr>
            </thead>
            <tbody>
               {
                  allStudents.map(
                     (student) => {
                        const total = student.maths + student.physics + student.chemistry;
                        const percentage = (total/300)*100;
                        
                        return (
                           <tr key={student.rollNo}>
                              <td>{student.rollNo}</td>
                              <td>{student.name}</td>
                              <td>{student.maths}</td>
                              <td>{student.physics}</td>
                              <td>{student.chemistry}</td>
                              <td>{total}</td>
                              <td>{percentage.toFixed(2)}</td>
                              <td> <button onClick={()=>handleDelete(student.rollNo)}>Delete</button></td>
                              <td><button onClick={()=>handleUpdate(student.rollNo)}>Update</button></td>
                           </tr>
                        );
                     }
                  )

               }
            </tbody>
         </table>

    </div>
  )
}

export default StudentData
