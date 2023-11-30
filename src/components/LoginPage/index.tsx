import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../api/api';
import { Container } from 'react-bootstrap';

import './style.css'
import PageHeader from '../PageHeader';
import PageFooter from '../PageFooter';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await api.get('/users', {
        params: {
          email,
          password,
        },
      });

      const user = response.data[0];
      if (user) {
        // Login successful, navigate to the UserList page
        navigate('/users');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('An error occurred during login');
    }
  };

  return (
    <>
      <PageHeader />
      <div className='main-login'>
        <Container>
          <h2 className='login-title'>Login</h2>
          <div className='login-email-container login-user-info-container'>
            <label>
              <div className='label-content'>
                Email:
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </label>
          </div>
          <div className='login-password-container login-user-info-container'>
            <label>
              <div className='label-content'>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </label>
          </div>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <button onClick={handleLogin}>Login</button>
          <p className='login-register'>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </Container>
      </div>
      <PageFooter />
    </>
  );
};

export default LoginPage;
