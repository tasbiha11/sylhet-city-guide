import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { InfoProvider } from './components/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <InfoProvider>
      <Router>
        <App />
      </Router>
    </InfoProvider>
  </React.StrictMode>
);


