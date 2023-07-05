import { StoreProvider } from 'easy-peasy';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { store } from './Store/PlayStore';
import { globalStore } from './Store/Globalstore';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider store={globalStore}>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
