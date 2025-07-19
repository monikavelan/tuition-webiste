import React, { useState } from 'react';
import '../styles/manageSubjects.css';

const ManageSubjects = () => {
  const [subjects, setSubjects] = useState([
    { name: 'English', category: 'Regular' },
    { name: 'Dance', category: 'Explore More' },
  ]);

  const [formData, setFormData] = useState({ name: '', category: 'Regular' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddSubject = (e) => {
    e.preventDefault();
    if (formData.name.trim() === '') return;
    setSubjects([...subjects, formData]);
    setFormData({ name: '', category: 'Regular' });
  };

  return (
    <div className="manage-subjects-page">
      <h2>📚 Manage Subjects</h2>

      <form className="subject-form" onSubmit={handleAddSubject}>
        <input
          type="text"
          name="name"
          placeholder="Subject Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="Regular">Regular</option>
          <option value="Explore More">Explore More</option>
        </select>
        <button type="submit">Add Subject</button>
      </form>

      <div className="subject-list">
        <h3>All Subjects</h3>
        <table>
          <thead>
            <tr>
              <th>Subject Name</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject, index) => (
              <tr key={index}>
                <td data-label="Subject Name">{subject.name}</td>
                <td data-label="Category">{subject.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageSubjects;
