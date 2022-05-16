import React from 'react'
import './logo.css';
import logo from '../../logo.svg';

const Logo = () => {
  return (
    <div className='contenedorLogo'>
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Store</p>
    </div>
  )
}

export default Logo