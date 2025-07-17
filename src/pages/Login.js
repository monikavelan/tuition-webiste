import React, { useState } from 'react';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState('student'); // student | teacher | admin
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Fake login credentials for each role
    const credentials = {
      student: { email: 'student@example.com', password: 'student123' },
      teacher: { email: 'teacher@example.com', password: 'teacher123' },
      admin: { email: 'admin@example.com', password: 'admin123' }
    };

    const user = credentials[role];

    if (formData.email === user.email && formData.password === user.password) {
      alert(`${role.charAt(0).toUpperCase() + role.slice(1)} login success`);

      // ✅ Store user role in localStorage
      localStorage.setItem('userRole', role);

      // ✅ Navigate to the correct dashboard
      navigate(`/${role}-dashboard`);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <div className="role-tabs">
        <button className={role === 'student' ? 'active' : ''} onClick={() => setRole('student')}>
          Student
        </button>
        <button className={role === 'teacher' ? 'active' : ''} onClick={() => setRole('teacher')}>
          Teacher
        </button>
        <button className={role === 'admin' ? 'active' : ''} onClick={() => setRole('admin')}>
          Admin
        </button>
      </div>

      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder={`${role.charAt(0).toUpperCase() + role.slice(1)} Email`}
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login as {role.charAt(0).toUpperCase() + role.slice(1)}</button>
      </form>
    </div>
  );
};

export default Login;
