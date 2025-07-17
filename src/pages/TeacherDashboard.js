import React from 'react';
import '../styles/dashboard.css';
import { useNavigate } from 'react-router-dom';

const TeacherDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Welcome, Teacher!</p>

      <div className="dashboard-cards">
        <div className="card" onClick={() => navigate('/subjects')} style={{ cursor: 'pointer' }}>
          My Subjects
        </div>
        <div className="card" onClick={() => navigate('/assign-work')}>
          Assign Work
        </div>
        <div className="card" onClick={() => navigate('/take-attendance')}>Take Attendance</div>
        <div className="card" onClick={() => navigate('/student-queries')}>
          Student Queries
        </div>

      </div>
    </div>
  );
};

export default TeacherDashboard;
