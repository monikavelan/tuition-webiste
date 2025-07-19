import React, { useState } from 'react';
import '../styles/register.css';

const AdminRegister = () => {
  const [form, setForm] = useState({
    instituteName: '',
    email: '',
    password: '',
    confirmPassword: '',
    logo: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'logo') {
      setForm({ ...form, logo: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    console.log("Admin Register Data:", form);
    alert("Admin registered (simulated)");
  };

  return (
    <div className="register-page">
      <div className="register-form">
        <h2>Admin Registration</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="instituteName" placeholder="Institute Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Admin Email" onChange={handleChange} required />
          <input type="file" name="logo" accept="image/*" onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
          <button type="submit">Register</button>
          <div className="register-footer">
            <div className="login-link">
              <a href="/admin-login">Already an Admin? Login</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminRegister;

