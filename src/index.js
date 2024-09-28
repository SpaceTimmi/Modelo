import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css'; // Import the global CSS with Tailwind
import App from './App'; // Main App component

// Find the root DOM element
const container = document.getElementById('root');

// Create a root
const root = createRoot(container);

// Render the App component
root.render(<App />);


