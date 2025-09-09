import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App.jsx';
import './index.css';

import axios from "axios"; // ✅ add this after imports

// ✅ Configure axios globally
axios.defaults.baseURL = import.meta.env.VITE_API_URL || '';
axios.defaults.withCredentials = true; // if you’re using cookies/auth

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <App />
    </Provider>
  </PersistGate>
);
