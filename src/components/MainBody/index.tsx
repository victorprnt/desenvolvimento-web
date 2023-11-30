import React from 'react';
import { Container } from 'react-bootstrap';

import './style.css'

const MainBody: React.FC = () => {
  return (
    <main className='main-body'>
      <Container>
        <h1 className='main-body-title'>Teacher Registration App</h1>
        <p className='main-body-message'>Welcome to our Teacher Registration App! This application allows you to register teachers for our school system.</p>

        <h2 className='main-list-title'>Features:</h2>
        <ul>
          <li className='main-list-item'>Easy and intuitive teacher registration process</li>
          <li className='main-list-item'>Secure storage of teacher information</li>
          <li className='main-list-item'>Ability to update and manage teacher profiles</li>
          <li className='main-list-item'>User-friendly interface for efficient use</li>
        </ul>

        <h2 className='main-list-title'>How to Use:</h2>
        <ol>
          <li className='main-list-item'>Click on the "Register" button to create a new teacher profile.</li>
          <li className='main-list-item'>Fill in the required information, including name, contact details, and subject expertise.</li>
          <li className='main-list-item'>Submit the form to add the teacher to our school system.</li>
          <li className='main-list-item'>Use the "Update Profile" option to modify teacher details if needed.</li>
          <li className='main-list-item'>Explore additional features as needed for efficient management.</li>
        </ol>

        <p>Thank you for using our Teacher Registration App. If you have any questions or need assistance, please contact our support team.</p>
      </Container>
    </main>
  );
};

export default MainBody;