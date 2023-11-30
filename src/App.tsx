import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/register" element={<UserForm isNewUser />} />
      </Routes>
    </Router>
  );
};

export default App;
