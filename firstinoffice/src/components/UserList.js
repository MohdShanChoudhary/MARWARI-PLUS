import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [updatedData, setUpdatedData] = useState({ name: '', email: '', password: '' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:5000/api/users');
    setUsers(res.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/users/${id}`);
    fetchUsers(); // Refresh list
  };

  const handleEditClick = (user) => {
    setEditUser(user._id);
    setUpdatedData({ name: user.name, email: user.email, password: user.password });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/users/${editUser}`, updatedData);
    setEditUser(null);
    fetchUsers(); // Refresh list
  };

  return (
    <div>
      <h2>All Users</h2>
      <table border="1" cellPadding="10">
        <thead style={{ backgroundColor: "#f0f0f0" }}>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user =>
            editUser === user._id ? (
              <tr key={user._id}>
                <td><input value={updatedData.name} onChange={(e) => setUpdatedData({ ...updatedData, name: e.target.value })} /></td>
                <td><input value={updatedData.email} onChange={(e) => setUpdatedData({ ...updatedData, email: e.target.value })} /></td>
                <td><input value={updatedData.password} onChange={(e) => setUpdatedData({ ...updatedData, password: e.target.value })} /></td>
                <td>
                  <button onClick={handleUpdate}>Save</button>
                  <button onClick={() => setEditUser(null)}>Cancel</button>
                </td>
              </tr>
            ) : (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <button onClick={() => handleEditClick(user)}>Edit</button>
                  <button onClick={() => handleDelete(user._id)}>Delete</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
