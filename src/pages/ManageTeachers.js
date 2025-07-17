import React, { useState } from 'react';
import '../styles/manageTeachers.css';

const ManageTeachers = () => {
  const [teachers, setTeachers] = useState([
    { id: 1, salutation: 'Mr.', name: 'Ravi Kumar', email: 'ravi@example.com', class: '10', subject: 'Maths' },
    { id: 2, salutation: 'Ms.', name: 'Anita Roy', email: 'anita@example.com', class: '12', subject: 'Physics' }
  ]);

  const [newTeacher, setNewTeacher] = useState({
    salutation: 'Mr.',
    name: '',
    email: '',
    class: '',
    subject: ''
  });

  const handleChange = (e) => {
    setNewTeacher({ ...newTeacher, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const { salutation, name, email, class: classAssigned, subject } = newTeacher;
    if (!name || !email || !classAssigned || !subject) {
      alert('Please fill all fields');
      return;
    }
    const id = Date.now();
    setTeachers([...teachers, { id, ...newTeacher }]);
    setNewTeacher({ salutation: 'Mr.', name: '', email: '', class: '', subject: '' });
  };

  const handleDelete = (id) => {
    setTeachers(teachers.filter(t => t.id !== id));
  };

  return (
    <div className="manage-teachers-page">
      <h2>Manage Teachers</h2>

      <form className="add-teacher-form" onSubmit={handleAdd}>
        <select name="salutation" value={newTeacher.salutation} onChange={handleChange}>
          <option value="Mr.">Mr.</option>
          <option value="Ms.">Ms.</option>
        </select>
        <input type="text" name="name" placeholder="Full Name" value={newTeacher.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={newTeacher.email} onChange={handleChange} />
        <input type="text" name="class" placeholder="Class (e.g., 10, 11)" value={newTeacher.class} onChange={handleChange} />
        <input type="text" name="subject" placeholder="Subject" value={newTeacher.subject} onChange={handleChange} />
        <button type="submit">Add Teacher</button>
      </form>

      <div className="teacher-list">
        {teachers.map((teacher) => (
          <div className="teacher-card" key={teacher.id}>
            <h3>{teacher.salutation} {teacher.name}</h3>
            <p><strong>Email:</strong> {teacher.email}</p>
            <p><strong>Class:</strong> {teacher.class}</p>
            <p><strong>Subject:</strong> {teacher.subject}</p>
            <button className="delete-btn" onClick={() => handleDelete(teacher.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageTeachers;
