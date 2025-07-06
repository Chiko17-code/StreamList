import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StreamListProvider } from './context/StreamListContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <StreamListProvider>
      <App />
    </StreamListProvider>
  </React.StrictMode>
);







