// src/components/UserList.tsx
import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser, updateUser } from '../../api/api';
import PageHeader from '../PageHeader';
import PageFooter from '../PageFooter';

import './style.css'
import { Container } from 'react-bootstrap';

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);


  const fetchUsers = () => {
    getUsers().then((response) => {
      setUsers(response.data);
    });
  };

  const handleDelete = (id: number) => {
    deleteUser(id).then(() => {
      console.log('User deleted');
      fetchUsers();
    });
  };

  const handleUpdate = (id: number) => {
    const updatedName = prompt('Enter the updated name:');
    const updatedEmail = prompt('Enter the updated email:');

    if (updatedName && updatedEmail) {
      updateUser(id, { name: updatedName, email: updatedEmail }).then(() => {
        console.log('User updated');
        fetchUsers();
      });
    }
  };

  return (
    <>
      <PageHeader />
      <div className='main-user-list'>
        <Container>
          <h2 className='user-list-title'>User List</h2>
          <ul>
            {users.map((user) => (
              <li key={user.id} className='user-list-item'>
                <strong>{user.name}:</strong> {user.email}
                <button className='user-list-button user-list-button-update' onClick={() => handleUpdate(user.id)}>Update</button>
                <button className='user-list-button user-list-button-delete' onClick={() => handleDelete(user.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </Container>
      </div>
      <PageFooter />
    </>
  );
};

export default UserList;
