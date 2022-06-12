//@ts-check
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import { HOCContext } from './contexts/CartContext/CartContext';


import Header from './components/Header/Header';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Error404Page from './pages/Error404Page/Error404Page';
import Footer from './components/Footer/Footer';
import CartPage from "./pages/CartPage/CartPage";
import CartDetail from './components/CartDetail/CartDetail';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <>
      <HOCContext>
        <BrowserRouter>

          <Header />

          <Routes>
            <Route path='/' element={<Hero/>} />
            <Route path='/tienda' element={<ItemListContainer greeting="Bienvenido" />} />
            <Route path='/category/:categoryKey' element={<ItemListContainer greeting="Bienvenido" />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/cartDetail' element={<CartDetail />} />
            <Route path='*' element={<Error404Page />} />
          </Routes>

          <Footer />

        </BrowserRouter>
      </HOCContext>

    </>
  );
}

export default App;
