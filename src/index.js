import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import your main App component
import './index.css'; // Import any global CSS styles
import './fonts.css'; // Optional: Create a separate file for font imports if needed

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Create a root DOM node
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root node
root.render(
  <>
    <ToastContainer></ToastContainer>
    <App /></>
);
