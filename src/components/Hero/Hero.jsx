import React from 'react';
import { Link } from 'react-router-dom';
import "./hero.css";

function Hero() {
  return (
    <div className='hero'>
        <h1>Software Store</h1>
        <Link to={`/tienda`} style={{ textDecoration: 'none' }}>
            <em>recorrer la tienda</em>
        </Link>
    </div>
  )
}

export default Hero