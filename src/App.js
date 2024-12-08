import React from 'react';
import './App.css';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { withAuthenticator, ThemeProvider, createTheme } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

// Ensure Amplify is configured after imports
Amplify.configure(awsExports);

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
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <header style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h1 style={{ color: '#1976d2', marginBottom: '20px' }}>
          Welcome to rosebud, {user?.username}!
        </h1>
        <p>Edit <code>src/App.js</code> and save to reload.</p>
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
    // Define sign-up form fields
    formFields: {
      signUp: {
        username: {
          label: 'Username',
          placeholder: 'Create a username',
          required: true,
        },
        password: {
          label: 'Password',
          placeholder: 'Enter your password',
          required: true,
        },
        confirm_password: {
          label: 'Confirm Password',
          placeholder: 'Confirm your password',
          required: true,
        },
        email: {
          label: 'Email',
          placeholder: 'Enter your email',
          required: true,
        },
        given_name: {
          label: 'First Name',
          placeholder: 'Enter your first name',
          required: true,
        },
        family_name: {
          label: 'Last Name',
          placeholder: 'Enter your last name',
          required: true,
        },
        phone_number: {
          label: 'Phone Number',
          placeholder: 'Enter your phone number',
          required: true,
        },
        address: {
          label: 'Address',
          placeholder: 'Enter your address',
          required: true,
        },
      },
    },
  }
);
