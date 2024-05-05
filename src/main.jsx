import React from 'react';
import ReactDOM from 'react-dom/client';
import App_66 from './App_66.jsx';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer position='top-center' autoClose={1500} />
    <App_66 />
  </React.StrictMode>
);
