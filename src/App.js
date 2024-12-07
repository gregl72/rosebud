import React from 'react';
import logo from './logo.svg';
import './App.css';

// Amplify and Auth UI imports
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';

// Configure Amplify with your project’s settings
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Rosebud, {user?.username}!</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={signOut} style={{ marginTop: '20px' }}>Sign Out</button>
      </header>
    </div>
  );
}

// Wrap App with the built-in Authenticator UI
export default withAuthenticator(App);
