import { StoreProvider } from 'easy-peasy';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import ModeStore from './Store/ModeStore';
// import store from './Store/PlayStore';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider store={ModeStore}>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
