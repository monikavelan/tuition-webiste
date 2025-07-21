import React, { useState } from 'react';
import '../styles/dashboard.css';
import { 
  FaChalkboardTeacher, 
  FaCreditCard,
  FaChartLine,
  FaClock,
  FaUserGraduate,
  FaExclamationTriangle,
  FaCog
} from 'react-icons/fa';

const AdminDashboard = () => {
  const [stats] = useState({
    totalStudents: 156,
    totalTeachers: 12,
    totalSubjects: 18,
    monthlyRevenue: 45000,
    pendingPayments: 8,
    activeClasses: 24,
    attendanceRate: 88,
    systemAlerts: 3
  });

  const [recentActivities] = useState([
    { id: 1, activity: 'New student registered - Sarah Johnson', time: '30 minutes ago', type: 'student' },
    { id: 2, activity: 'Payment received from John Doe', time: '2 hours ago', type: 'payment' },
    { id: 3, activity: 'Teacher Maria added Physics subject', time: '4 hours ago', type: 'teacher' },
    { id: 4, activity: 'System backup completed successfully', time: '6 hours ago', type: 'system' }
  ]);

  const systemAlerts = [
    { id: 1, message: 'Server maintenance scheduled for tomorrow', type: 'warning', time: '1 hour ago' },
    { id: 2, message: '3 students have overdue payments', type: 'danger', time: '2 hours ago' }
  ];

  return (
    <div className="enhanced-dashboard">
      {/* Header Section */}
      <div className="dashboard-header">
        <div className="welcome-section">
          <div className="welcome-text">
            <h1>Welcome back, Admin!</h1>
            <p>Here's what's happening in your tuition center today</p>
          </div>
          <div className="header-stats">
            <div className="stat-item">
              <div>
                <span className="stat-number">{stats.totalStudents}</span>
                <span className="stat-label">Students Enrolled</span>
              </div>
            </div>
            <div className="stat-item">
              <div>
                <span className="stat-number">{stats.activeClasses}</span>
                <span className="stat-label">Classes Today</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* System Alerts */}
      {systemAlerts.length > 0 && (
        <div className="alerts-section">
          <h3 className="section-title">
            <FaExclamationTriangle className="section-icon" />
            System Alerts
          </h3>
          <div className="alerts-container">
            {systemAlerts.map((alert) => (
              <div key={alert.id} className={`alert alert-${alert.type}`}>
                <div className="alert-content">
                  <p>{alert.message}</p>
                  <span className="alert-time">{alert.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Stats Overview */}
      <div className="stats-grid">
        <div className="stat-card primary">
          <div className="stat-content">
            <div className="stat-info">
              <h3>{stats.totalStudents}</h3>
              <p>Total Students</p>
            </div>
          </div>
          <div className="stat-footer">
            <span className="stat-change positive">+12 this month</span>
          </div>
        </div>

        <div className="stat-card success">
          <div className="stat-content">
            <div className="stat-info">
              <h3>{stats.totalTeachers}</h3>
              <p>Active Teachers</p>
            </div>
          </div>
          <div className="stat-footer">
            <span className="stat-change positive">+2 this month</span>
          </div>
        </div>

        <div className="stat-card warning">
          <div className="stat-content">
            <div className="stat-info">
              <h3>₹{stats.monthlyRevenue.toLocaleString()}</h3>
              <p>Monthly Revenue</p>
            </div>
          </div>
          <div className="stat-footer">
            <span className="stat-change positive">+8% from last month</span>
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
                  {activity.type === 'student' && <FaUserGraduate />}
                  {activity.type === 'payment' && <FaCreditCard />}
                  {activity.type === 'teacher' && <FaChalkboardTeacher />}
                  {activity.type === 'system' && <FaCog />}
                </div>
                <div className="activity-content">
                  <p className="activity-text">{activity.activity}</p>
                  <span className="activity-time">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Overview */}
        <div className="dashboard-section">
          <h3 className="section-title">
            <FaChartLine className="section-icon" />
            System Overview
          </h3>
          <div className="system-overview">
            <div className="overview-item">
              <div className="overview-header">
                <span>Overall Attendance Rate</span>
                <span className="overview-value">{stats.attendanceRate}%</span>
              </div>
              <div className="overview-bar">
                <div 
                  className="overview-fill" 
                  style={{ width: `${stats.attendanceRate}%` }}
                ></div>
              </div>
            </div>
            
            <div className="overview-item">
              <div className="overview-header">
                <span>Payment Collection Rate</span>
                <span className="overview-value">95%</span>
              </div>
              <div className="overview-bar">
                <div 
                  className="overview-fill" 
                  style={{ width: '95%' }}
                ></div>
              </div>
            </div>

            <div className="overview-item">
              <div className="overview-header">
                <span>Teacher-Student Ratio</span>
                <span className="overview-value">1:13</span>
              </div>
              <div className="overview-description">
                Optimal ratio maintained
              </div>
            </div>

            <div className="overview-item">
              <div className="overview-header">
                <span>System Uptime</span>
                <span className="overview-value">99.8%</span>
              </div>
              <div className="overview-description">
                Excellent performance
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
