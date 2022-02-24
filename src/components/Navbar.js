import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className='container'>
     
      <div className='logo'>
        <Link to='/' >
          <img className='logo__img' src='./logoReverse.svg' alt='logo'/>
        </Link>
      </div>

      <div className='menu'>
        <Link to='/careerServices'>
          Career Services
        </Link>

        <Link to='/requestForm'>
          Request Info
        </Link>
      </div>
      
    </div>
  )
}

export default Navbar;

/*
<div className='navbar'>
      <div className='logo'>
        <Link to='/' >
          <img className='logo__img' src='./nic_logo.png' alt='logo'/>
        </Link>
      </div>

      <div>
        <Link to='/careerServices'>
          Career Services
        </Link>

        <Link to='/requestForm'>
          Request More Info
        </Link>
      </div>
    </div>


*/