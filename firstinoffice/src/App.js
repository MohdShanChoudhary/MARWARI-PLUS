// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './App.css'; // Link to plain CSS file

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <h1 className="navbar-title">💰 MoneyManagement</h1>
        <div className="navbar-buttons">
          <Link to="/" className="nav-button">➕ Add Client</Link>
          <Link to="/users" className="nav-button">📄 View Clients</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </Router>
  );
};

export default App;
