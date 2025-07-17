import React, { useState } from 'react';
import '../styles/assignments.css';

const dummyAssignments = [
  {
    subject: 'Maths',
    title: 'Trigonometry Worksheet',
    dueDate: '2025-07-15',
    status: 'Pending',
  },
  {
    subject: 'English',
    title: 'Essay on Global Warming',
    dueDate: '2025-07-12',
    status: 'Submitted',
  },
  {
    subject: 'Science',
    title: 'Lab Report on Acids & Bases',
    dueDate: '2025-07-18',
    status: 'Pending',
  },
];

const Assignments = () => {
  const [assignments, setAssignments] = useState(dummyAssignments);
  const [selectedFiles, setSelectedFiles] = useState({});

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    setSelectedFiles({ ...selectedFiles, [index]: file });
  };

  const handleSubmit = (index) => {
    const file = selectedFiles[index];
    if (!file) {
      alert('Please select a file before submitting.');
      return;
    }

    console.log(`Submitting for assignment ${assignments[index].title}`);
    console.log('Uploaded file:', file);

    const updatedAssignments = [...assignments];
    updatedAssignments[index].status = 'Submitted';
    setAssignments(updatedAssignments);

    alert('Assignment submitted successfully!');
  };

  return (
    <div className="assignment-page">
      <h2>My Assignments</h2>
      <div className="assignment-list">
        {assignments.map((item, idx) => (
          <div className="assignment-card" key={idx}>
            <h3>{item.title}</h3>
            <p><strong>Subject:</strong> {item.subject}</p>
            <p><strong>Due:</strong> {item.dueDate}</p>
            <p className={`status ${item.status.toLowerCase()}`}>
              {item.status}
            </p>

            {item.status === 'Pending' && (
              <>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.jpg,.png"
                  onChange={(e) => handleFileChange(e, idx)}
                  className="file-input"
                />
                {selectedFiles[idx] && (
                  <p className="file-name">Selected: {selectedFiles[idx].name}</p>
                )}
                <button className="submit-btn" onClick={() => handleSubmit(idx)}>
                  Submit Assignment
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
