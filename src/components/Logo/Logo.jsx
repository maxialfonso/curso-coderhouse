import React from 'react'
import './logo.css';
import logo from '../../logo.svg';

const Logo = () => {
  return (
    <div className='contenedorLogo'>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Soft Store</p>
    </div>
  )
}

export default Logo