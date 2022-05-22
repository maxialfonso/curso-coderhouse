import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';

function App() {
  return (
    <>
      <Header/>
      <HomePage/>
      {/* <ProductDetailPage/> */}
    </>
  );
}

export default App;
