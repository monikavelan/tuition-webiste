import React from 'react';
import '../styles/dashboard.css';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate(); // ✅ Declare navigate

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Welcome, Admin!</p>

      <div className="dashboard-cards">
        <div className="card" onClick={() => navigate('/manage-students')}>Manage Students</div>
        <div className="card" onClick={() => navigate('/manage-teachers')}>Manage Teachers</div>
        <div className="card" onClick={() => navigate('/manage-payments')}>Manage Payments</div>
        <div className="card" onClick={() => navigate('/manage-subjects')}>Manage Subjects</div>
      </div>
    </div>
  );
};

export default AdminDashboard;
