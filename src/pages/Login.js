import React, { useState } from 'react';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState('student'); // student | teacher | admin
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(''); // Clear error when user types
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    // Fake login credentials for each role
    const credentials = {
      student: { email: 'student@example.com', password: 'student123' },
      teacher: { email: 'teacher@example.com', password: 'teacher123' },
      admin: { email: 'admin@example.com', password: 'admin123' }
    };

    const user = credentials[role];

    // Simulate API call delay
    setTimeout(() => {
      if (formData.email === user.email && formData.password === user.password) {
        // Store user role in localStorage
        localStorage.setItem('userRole', role);
        localStorage.setItem('userEmail', formData.email);
        
        // Navigate to the correct dashboard
        navigate(`/${role}-dashboard`);
      } else {
        setError('Invalid email or password. Please try again.');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login to Your Account</h2>
        
        {/* Demo credentials info */}
        <div className="demo-info">
          <h4>Demo Credentials:</h4>
          <p><strong>Student:</strong> student@example.com / student123</p>
          <p><strong>Teacher:</strong> teacher@example.com / teacher123</p>
          <p><strong>Admin:</strong> admin@example.com / admin123</p>
        </div>

        <div className="role-tabs">
          <button 
            className={role === 'student' ? 'active' : ''} 
            onClick={() => setRole('student')}
            disabled={loading}
          >
            Student
          </button>
          <button 
            className={role === 'teacher' ? 'active' : ''} 
            onClick={() => setRole('teacher')}
            disabled={loading}
          >
            Teacher
          </button>
          <button 
            className={role === 'admin' ? 'active' : ''} 
            onClick={() => setRole('admin')}
            disabled={loading}
          >
            Admin
          </button>
        </div>

        <form className="login-form" onSubmit={handleLogin}>
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder={`${role.charAt(0).toUpperCase() + role.slice(1)} Email`}
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className={loading ? 'loading' : ''}
          >
            {loading ? 'Logging in...' : `Login as ${role.charAt(0).toUpperCase() + role.slice(1)}`}
          </button>
        </form>

        <div className="login-footer">
          <p>Don't have an account? <a href="/register/student">Register here</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
