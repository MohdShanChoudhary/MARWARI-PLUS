import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('All');
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/users');
      setUsers(res.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await axios.delete(`http://localhost:5000/api/users/${id}`);
        fetchUsers();
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  const handleEdit = (user) => {
    setEditUser(user);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/users/${editUser._id}`, editUser);
      setEditUser(null);
      fetchUsers();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const filteredUsers = filter === 'All' ? users : users.filter(user => user.transactionType === filter);

  return (
    <div style={{ maxWidth: '95%', margin: '20px auto', padding: '20px', background: '#f2f2f2', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center' }}>Client List</h2>

      <label>Filter: </label>
      <select onChange={(e) => setFilter(e.target.value)} value={filter}>
        <option value="All">All</option>
        <option value="Buy">Buy</option>
        <option value="Sell">Sell</option>
      </select>

      <table border="1" cellPadding="8" style={{ marginTop: '15px', width: '100%', background: '#fff' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Payable</th>
            <th>Received</th>
            <th>Pending</th>
            <th>Remarks</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.transactionType}</td>
              <td>{user.amount}</td>
              <td>{user.payableAmount || '-'}</td>
              <td>{user.receivedAmount || '-'}</td>
              <td>{user.pendingAmount}</td>
              <td>{user.remarks}</td>
              <td>{new Date(user.date).toLocaleDateString()}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user._id)} style={{ marginLeft: '5px' }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editUser && (
        <div style={{ marginTop: '30px', padding: '15px', background: '#fff', border: '1px solid #ccc' }}>
          <h3>Edit User: {editUser.name}</h3>
          <form onSubmit={handleUpdate}>
            <input name="name" value={editUser.name} onChange={handleInputChange} placeholder="Name" required /><br />
            <input name="phone" value={editUser.phone} onChange={handleInputChange} placeholder="Phone" required /><br />
            <input name="email" value={editUser.email} onChange={handleInputChange} placeholder="Email" required /><br />
            <select name="transactionType" value={editUser.transactionType} onChange={handleInputChange}>
              <option value="Buy">Buy</option>
              <option value="Sell">Sell</option>
            </select><br />
            <input name="amount" value={editUser.amount} onChange={handleInputChange} placeholder="Amount" required /><br />
            <input name="payableAmount" value={editUser.payableAmount || ''} onChange={handleInputChange} placeholder="Payable" /><br />
            <input name="receivedAmount" value={editUser.receivedAmount || ''} onChange={handleInputChange} placeholder="Received" /><br />
            <input name="pendingAmount" value={editUser.pendingAmount || ''} onChange={handleInputChange} placeholder="Pending" /><br />
            <input name="remarks" value={editUser.remarks || ''} onChange={handleInputChange} placeholder="Remarks" /><br /><br />
            <button type="submit">Update</button>
            <button type="button" onClick={() => setEditUser(null)} style={{ marginLeft: '10px' }}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserList;
