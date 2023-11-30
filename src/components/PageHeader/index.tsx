import React from 'react';
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';

import './style.css'

const PageHeader: React.FC = () => {
  return (
    <header>
      <Container>
        <nav>
          <div className="header-logo">
            <img src="./school-logo.jpg" alt="Logo" />
          </div>
          <div className="links-container">
            <Link className="sign-in" to={`/login`}>Sign in</Link>
            <Link className="sign-up" to={`/register`}>Sign up</Link>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default PageHeader;