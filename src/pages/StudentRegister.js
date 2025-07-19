import React, { useState } from 'react';
import '../styles/register.css';

const StudentRegister = () => {
  const [form, setForm] = useState({
    salutation: 'Mr.',
    firstName: '',
    lastName: '',
    mobile: '',
    timezone: '',
    email: '',
    password: '',
    confirmPassword: '',
    class: '',
    group: '',
    syllabus: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'class') {
      setForm((prev) => ({
        ...prev,
        class: value,
        group: value === 'Class 11' || value === 'Class 12' ? prev.group : ''
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    localStorage.setItem('userRole', 'student');
    localStorage.setItem('studentClass', form.class);
    localStorage.setItem('studentSyllabus', form.syllabus);
    if (form.group) {
      localStorage.setItem('studentGroup', form.group);
    }

    console.log("Student Registered:", form);
    alert("Student Registered Successfully");
    // Navigate to login or dashboard
  };

  return (
    <div className="register-page">
      <div className="register-form">
        <h2>Register as Student</h2>
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

          {/* Syllabus Dropdown */}
          <select name="syllabus" onChange={handleChange} required>
            <option value="">Select Syllabus</option>
            <option value="Matric">Matric</option>
            <option value="CBSE">CBSE</option>
            <option value="ICSE">ICSE</option>
            <option value="IGCSE">IGCSE</option>
            <option value="IB">IB</option>
            <option value="State Board">State Board</option>
            <option value="Other">Other</option>
          </select>

          {/* Class Dropdown */}
          <select name="class" onChange={handleChange} required>
            <option value="">Select Class</option>
            <option value="LKG">LKG</option>
            <option value="UKG">UKG</option>
            {[...Array(12)].map((_, i) => (
              <option key={i + 1} value={`Class ${i + 1}`}>
                Class {i + 1}
              </option>
            ))}
          </select>

          {/* Show group only if Class 11 or Class 12 */}
          {(form.class === 'Class 11' || form.class === 'Class 12') && (
            <select name="group" onChange={handleChange} required>
              <option value="">Select Group</option>
              <option value="Bio-Maths">Bio-Maths</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Commerce">Commerce</option>
              <option value="General">General</option>
            </select>
          )}

          <select name="timezone" onChange={handleChange} required>
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

          <div className="register-footer">
            <div className="login-link">
              <a href="/login">Already a User? Continue Here</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentRegister;
