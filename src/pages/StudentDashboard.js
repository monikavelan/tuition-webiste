import React from 'react';
import '../styles/dashboard.css';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Welcome, Student!</p>

      <div className="dashboard-cards">
        <div className="card" onClick={() => navigate('/subjects')} style={{ cursor: 'pointer' }}>
          My Subjects
        </div>
        <div className="card" onClick={() => navigate('/assignments')} style={{ cursor: 'pointer' }}>
          Assignments
        </div>
        <div className="card" onClick={() => navigate('/queries')} style={{ cursor: 'pointer' }}>
          My Queries
        </div>
        <div className="card" onClick={() => navigate('/fee-payment')} style={{ cursor: 'pointer' }}>
          Fee Payment
        </div>
        <div className="card" onClick={() => navigate('/payment-history')} style={{ cursor: 'pointer' }}>
          Payment History
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
