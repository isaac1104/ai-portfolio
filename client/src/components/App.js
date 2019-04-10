import React from 'react';
import logo from '../assets/logo.png';

const styles = {
  container: {
    height: '100vh',
    backgroundColor: '#393e46',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#eeeeee',
    textAlign: 'center'
  }
};

const App = () => (
  <div style={styles.container}>
    <div>
      <img src={logo} alt='AiCodeLab Logo' />
      <h1 style={styles.text}>Coming Soon</h1>
    </div>
  </div>
);

export default App;
