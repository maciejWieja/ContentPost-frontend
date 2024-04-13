import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './views/Root';
import AppProviders from './providers/AppProviders';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProviders>
      <Root />
    </AppProviders>
  </React.StrictMode>,
);
