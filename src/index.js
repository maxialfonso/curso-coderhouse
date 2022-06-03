import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { initializeApp } from "firebase/app";

initializeApp(
    {
        apiKey: "AIzaSyCCQ83jtNtCJpMx4SfUVCpl74kafN3ivu0",
        authDomain: "react-teco-coder.firebaseapp.com",
        projectId: "react-teco-coder",
        storageBucket: "react-teco-coder.appspot.com",
        messagingSenderId: "480339606092",
        appId: "1:480339606092:web:1076d1212d6a13043692e9"
      }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
