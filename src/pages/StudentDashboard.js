import React, { useState } from 'react';
import '../styles/dashboard.css';
import { 
  FaBookOpen, 
  FaTasks, 
  FaQuestionCircle, 
  FaCreditCard,
  FaChartLine,
  FaClock
} from 'react-icons/fa';

const StudentDashboard = () => {
  const [stats] = useState({
    enrolledSubjects: 5,
    pendingAssignments: 3,
    completedAssignments: 12,
    upcomingClasses: 2,
    lastPayment: 'Jan 2025',
    attendance: 85
  });

  const [recentActivities] = useState([
    { id: 1, activity: 'Math Assignment submitted', time: '2 hours ago', type: 'assignment' },
    { id: 2, activity: 'Physics class attended', time: '1 day ago', type: 'class' },
    { id: 3, activity: 'Fee payment completed', time: '3 days ago', type: 'payment' }
  ]);



  return (
    <div className="enhanced-dashboard">
      {/* Header Section */}
      <div className="dashboard-header">
        <div className="welcome-section">
          <div className="welcome-text">
            <h1>Welcome back, Student!</h1>
            <p>Here's what's happening with your studies today</p>
          </div>
          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-number">{stats.enrolledSubjects}</span>
              <span className="stat-label">Subjects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{stats.attendance}%</span>
              <span className="stat-label">Attendance</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="stats-grid">
        <div className="stat-card primary">
          <div className="stat-content">
            <div className="stat-info">
              <h4>{stats.pendingAssignments}</h4>
              <p>Pending Assignments</p>
            </div>
          </div>
          <div className="stat-footer">
            <span className="stat-change negative">Due soon</span>
          </div>
        </div>

        <div className="stat-card warning">
          <div className="stat-content">
            <div className="stat-info">
              <h4>{stats.upcomingClasses}</h4>
              <p>Upcoming Classes</p>
            </div>
          </div>
          <div className="stat-footer">
            <span className="stat-change">Today</span>
          </div>
        </div>

        <div className="stat-card info">
          <div className="stat-content">
            <div className="stat-info">
              <h4>{stats.lastPayment}</h4>
              <p>Last Payment</p>
            </div>
          </div>
          <div className="stat-footer">
            <span className="stat-change">Up to date</span>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="dashboard-content-grid">
        {/* Recent Activities */}
        <div className="dashboard-section">
          <h3 className="section-title">
            <FaClock className="section-icon" />
            Recent Activities
          </h3>
          <div className="activities-list">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className={`activity-icon ${activity.type}`}>
                  {activity.type === 'assignment' && <FaTasks />}
                  {activity.type === 'class' && <FaBookOpen />}
                  {activity.type === 'payment' && <FaCreditCard />}
                  {activity.type === 'quiz' && <FaQuestionCircle />}
                </div>
                <div className="activity-content">
                  <p className="activity-text">{activity.activity}</p>
                  <span className="activity-time">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Section */}
        <div className="dashboard-section">
          <h3 className="section-title">
            <FaChartLine className="section-icon" />
            Progress Overview
          </h3>
          <div className="progress-container">
            <div className="progress-item">
              <div className="progress-header">
                <span>Overall Attendance</span>
                <span className="progress-value">{stats.attendance}%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${stats.attendance}%` }}
                ></div>
              </div>
            </div>
            
            <div className="progress-item">
              <div className="progress-header">
                <span>Assignment Completion</span>
                <span className="progress-value">80%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: '80%' }}
                ></div>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-header">
                <span>Course Progress</span>
                <span className="progress-value">65%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: '65%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
