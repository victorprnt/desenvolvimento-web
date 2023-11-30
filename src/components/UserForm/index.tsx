import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import api from '../../api/api';
import PageHeader from '../PageHeader';
import PageFooter from '../PageFooter';
import { Container } from 'react-bootstrap';

import './style.css'

interface UserFormProps {
  isNewUser: boolean;
}

const UserForm: React.FC<UserFormProps> = ({ isNewUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isNewUser && id) {
      // Fetch existing user data if it's an edit form
      api.get(`/users/${id}`).then((response) => {
        const userData = response.data;
        setName(userData.name);
        setEmail(userData.email);
      });
    }
  }, [isNewUser, id]);

  const handleSubmit = async () => {
    try {
      const userData = {
        name,
        email,
        password, // Include password in user data
      };

      if (isNewUser) {
        // Create a new user
        await api.post('/users', userData);
      } else {
        // Update an existing user
        await api.put(`/users/${id}`, userData);
      }

      // Redirect to the UserList page after form submission
      navigate('/users');
    } catch (error) {
      setError('An error occurred while saving user data');
    }
  };

  return (
    <>
      <PageHeader />
      <div className='main-register'>
        <Container>
          <h2 className='register-title'>{isNewUser ? 'Create User' : 'Edit User'}</h2>
          <div className='register-name-container register-user-info-container'>
            <label>
              <div className='label-content'>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
            </label>
          </div>
          <div className='register-email-container register-user-info-container'>
            <label>
              <div className='label-content'>
                Email:
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </label>
          </div>
          {isNewUser && ( // Only show password field for new user creation
            <div className='register-password-container register-user-info-container'>
              <label>
                <div className='label-content'>
                  Password:
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
              </label>
            </div>
          )}
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <button onClick={handleSubmit}>{isNewUser ? 'Create' : 'Save Changes'}</button>
          <p>
            <Link to="/users">Back to Users</Link>
          </p>
        </Container >
      </div>
      <PageFooter />
    </>
  );
};

export default UserForm;
