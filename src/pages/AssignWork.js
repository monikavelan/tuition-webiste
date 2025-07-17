import React, { useState } from 'react';
import '../styles/assignWork.css'; // ensure this file exists and is correctly linked

const AssignWork = () => {
  const [form, setForm] = useState({
    title: '',
    subject: '',
    dueDate: '',
    classAssigned: '',
    file: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setForm(prev => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Assignment submitted:", form);
    // You can now send `form` to your backend
  };

  return (
    <div className="assign-work-page">
      <h2>Assign New Work</h2>
      <form className="assign-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Assignment Title"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="dueDate"
          onChange={handleChange}
          required
        />
        <select
          name="classAssigned"
          onChange={handleChange}
          required
        >
          <option value="">Select Class</option>
          <option value="7">Class 7</option>
          <option value="9">Class 9</option>
          <option value="10">Class 10</option>
        </select>
        <input
          type="file"
          onChange={handleFileChange}
          className="file-input"
        />
        <button type="submit">Assign</button>
      </form>
    </div>
  );
};

export default AssignWork;
