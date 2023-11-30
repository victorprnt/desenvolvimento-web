import React from 'react';
import PageHeader from "./PageHeader";
import PageFooter from './PageFooter';
import MainBody from './MainBody';

const LandingPage: React.FC = () => {
  return (
    <>
      <PageHeader />
      <MainBody />
      <PageFooter />
    </>
  );
};

export default LandingPage;