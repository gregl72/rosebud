import React from 'react';
import logo from './logo.svg';
import './App.css';

// Amplify imports
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

// Amplify UI (for authentication and theming)
import { withAuthenticator, ThemeProvider, createTheme } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

// Configure Amplify
Amplify.configure(awsExports);

// Create a custom Amplify UI theme
const myTheme = createTheme({
  name: 'my-theme',
  tokens: {
    colors: {
      brand: {
        primary: { value: '#1976d2' },
      },
      background: {
        primary: { value: '#f0f0f0' },
      },
      font: {
        primary: { value: '#333' },
      },
    },
    components: {
      button: {
        primary: {
          backgroundColor: { value: '{colors.brand.primary}' },
          borderRadius: { value: '8px' },
          fontWeight: { value: '600' },
        },
      },
      field: {
        label: {
          fontSize: { value: '1rem' },
          fontWeight: { value: 'bold' },
        },
        control: {
          borderColor: { value: '{colors.brand.primary}' },
          borderRadius: { value: '8px' },
          fontSize: { value: '1rem' }
        },
      },
      heading: {
        1: {
          fontSize: { value: '1.5rem' },
          fontWeight: { value: '600' },
          color: { value: '{colors.brand.primary}' },
          textAlign: { value: 'center' }
        }
      },
    },
  },
});

function App({ signOut, user }) {
  return (
    <div className="App" style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <header className="App-header" style={{ padding: '40px 20px' }}>
        <img src={logo} className="App-logo" alt="logo" style={{ marginBottom: '20px' }} />
        <h1 style={{ color: '#1976d2', marginBottom: '20px' }}>
          Welcome to rosebud, {user?.username}!
        </h1>
        
        <button 
          onClick={signOut} 
          style={{ 
            marginTop: '30px', 
            padding: '10px 20px', 
            borderRadius: '8px', 
            border: 'none', 
            backgroundColor: '#1976d2', 
            color: '#fff', 
            fontWeight: '600', 
            cursor: 'pointer' 
          }}
        >
          Sign Out
        </button>
      </header>
    </div>
  );
}

export default withAuthenticator(
  (props) => (
    <ThemeProvider theme={myTheme}>
      <App {...props} />
    </ThemeProvider>
  ),
  {
    variation: 'default',
  }
);
