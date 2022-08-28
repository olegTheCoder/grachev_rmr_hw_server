import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './ui-library/styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from '../src/infrastructure/context';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>,
);
