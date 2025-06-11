// src/components/UserForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users', formData);
      navigate('/users'); // 🔄 Redirect to user list
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <br /><br />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <br /><br />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
