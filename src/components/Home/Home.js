import React from 'react';
import NavBar from '../NavBar';
import LandingPage from '../LandingPage';

class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <LandingPage />
      </div>
    );
  }
}

export default Home;

