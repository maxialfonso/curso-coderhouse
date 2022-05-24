//@ts-check
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header/Header';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Error404Page from './pages/Error404Page/Error404Page';
import Footer from './components/Footer/Footer';
import CartPage from "./pages/CartPage/CartPage"

function App() {
  return (
    <>
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path='/' element={ <ItemListContainer greeting="Bienvenido"/> }/>
          <Route path='/category/:categoryName' element={ <ItemListContainer greeting="Bienvenido"/> }/>
          <Route path='/item/:id' element={ <ItemDetailContainer/> }/>
          <Route path='/cart' element={ <CartPage/> }/>
          <Route path='*' element={<Error404Page/>}/>
        </Routes>

        <Footer/>

      </BrowserRouter>

    </>
  );
}

export default App;
