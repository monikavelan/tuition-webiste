import React, { useState } from 'react';
import '../styles/register.css'; // Same CSS as student

const TeacherRegister = () => {
  const [form, setForm] = useState({
    salutation: 'Mr.',
    firstName: '',
    lastName: '',
    mobile: '',
    timezone: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    console.log("Teacher Data:", form);
    // Submit logic
  };

  return (
    <div className="register-form">
      <h2>Register as Teacher</h2>
      <form onSubmit={handleSubmit}>
        <div className="name-fields">
          <input
            type="text"
            name="salutation"
            placeholder="Mr./Ms."
            value={form.salutation}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          onChange={handleChange}
          required
        />
        <select
          name="timezone"
          onChange={handleChange}
          required
        >
          <option value="">- Select Timezone -</option>
          <option value="IST">India Standard Time (IST)</option>
          <option value="UTC">UTC</option>
          <option value="EST">Eastern Standard Time (EST)</option>
        </select>
        <input
          type="email"
          name="email"
          placeholder="Email ID"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
        <div className="login-link">
          <a href="/login">Already a User? Continue Here</a>
        </div>
      </form>
    </div>
  );
};

export default TeacherRegister;
