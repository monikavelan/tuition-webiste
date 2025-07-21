import React, { useState } from 'react';
import '../styles/dashboard.css';
import { 
  FaTasks, 
  FaUserCheck, 
  FaQuestionCircle,
  FaChartLine,
  FaClock,
  FaClipboardList
} from 'react-icons/fa';

const TeacherDashboard = () => {
  const [stats] = useState({
    totalStudents: 45,
    activeClasses: 6,
    pendingQueries: 8,
    assignmentsToReview: 12,
    attendanceRate: 92,
    upcomingClasses: 3
  });

  const [recentActivities] = useState([
    { id: 1, activity: 'Math assignment graded for Class 10A', time: '1 hour ago', type: 'grading' },
    { id: 2, activity: 'Attendance taken for Physics class', time: '3 hours ago', type: 'attendance' },
    { id: 3, activity: 'New query from student John', time: '5 hours ago', type: 'query' },
    { id: 4, activity: 'Chemistry assignment created', time: '1 day ago', type: 'assignment' }
  ]);

  return (
    <div className="enhanced-dashboard">
      {/* Header Section */}
      <div className="dashboard-header">
        <div className="welcome-section">
          <div className="welcome-text">
            <h1>Welcome back, Teacher!</h1>
            <p>Manage your classes and help students succeed</p>
          </div>
          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-number">{stats.totalStudents}</span>
              <span className="stat-label">Students</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{stats.attendanceRate}%</span>
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
              <h4>{stats.assignmentsToReview}</h4>
              <p>Assignments to Review</p>
            </div>
          </div>
          <div className="stat-footer">
            <span className="stat-change negative">Pending review</span>
          </div>
        </div>

        <div className="stat-card warning">
          <div className="stat-content">
            <div className="stat-info">
              <h4>{stats.pendingQueries}</h4>
              <p>Student Queries</p>
            </div>
          </div>
          <div className="stat-footer">
            <span className="stat-change">Awaiting response</span>
          </div>
        </div>

        <div className="stat-card info">
          <div className="stat-content">
            <div className="stat-info">
              <h4>{stats.upcomingClasses}</h4>
              <p>Classes Today</p>
            </div>
          </div>
          <div className="stat-footer">
            <span className="stat-change">Scheduled</span>
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
                  {activity.type === 'grading' && <FaTasks />}
                  {activity.type === 'attendance' && <FaUserCheck />}
                  {activity.type === 'query' && <FaQuestionCircle />}
                  {activity.type === 'assignment' && <FaClipboardList />}
                </div>
                <div className="activity-content">
                  <p className="activity-text">{activity.activity}</p>
                  <span className="activity-time">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Overview */}
        <div className="dashboard-section">
          <h3 className="section-title">
            <FaChartLine className="section-icon" />
            Class Performance
          </h3>
          <div className="performance-grid">
            <div className="performance-item">
              <h4>Average Assignment Score</h4>
              <div className="performance-value">85%</div>
              <div className="performance-bar">
                <div className="performance-fill" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div className="performance-item">
              <h4>Class Participation</h4>
              <div className="performance-value">78%</div>
              <div className="performance-bar">
                <div className="performance-fill" style={{ width: '78%' }}></div>
              </div>
            </div>

            <div className="performance-item">
              <h4>Assignment Submission Rate</h4>
              <div className="performance-value">92%</div>
              <div className="performance-bar">
                <div className="performance-fill" style={{ width: '92%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
