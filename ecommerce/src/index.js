import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDS7c5jbUB0vPmIVF14Umvonm0yuHrT5uM",
  authDomain: "coder-maste.firebaseapp.com",
  projectId: "coder-maste",
  storageBucket: "coder-maste.appspot.com",
  messagingSenderId: "860334933242",
  appId: "1:860334933242:web:9dcf6f5e29d0bd59d8b543"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
