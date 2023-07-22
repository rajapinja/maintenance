import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
//import './index.css';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
     <AuthProvider>
       <Routes>
          <Route path='/*' element={ <App />}/>
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);