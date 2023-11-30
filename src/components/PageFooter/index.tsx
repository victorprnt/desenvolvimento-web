import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './style.css'

const PageFooter: React.FC = () => {
  return (
    <footer id="home-footer">
      <Container>
        <div className="content">
          <div className="footer-logo">
            <img src="./school-logo.jpg" alt="Logo" />
            <p>
              Your School Registration System
              <br />© Copyright 2023
            </p>
            <p>
              Fortaleza
              <br />
              Ceará
              <br />
              Brasil
            </p>
          </div>
          <div className="footer-text">Register Your Workers</div>
        </div>
      </Container>
    </footer>
  );
};

export default PageFooter;