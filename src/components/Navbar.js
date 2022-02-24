import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        
        <Link className="navbar-brand home" to='/'>
          <img className="logo__img" src='./logoReverse.svg' alt='logo'/>
          <span className="hidden">North Idaho College</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-center">
              
              <li className="nav-item">
                <Link className="nav-link" to='/careerServices'>
                  Career Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/requestForm'>
                  Requst Information
                </Link>
              </li>
              
            </ul>
          
          </div>
          
      </div>
    </nav>
  );
}

export default Navbar;

/*

 const menu = document.querySelector('.menu');
  const menuBtn = document.querySelector('.menu-btn');
  const closeBtn = document.querySelector('.close-btn');

  const handleOpenMenu = () => {
    menu.classList.add('active');
  }

  const handleCloseMenu = () => {
    menu.classList.remove('active');
  }



  <div className='container'>
     
      <div className='logo'>
        <Link to='/' >
          <img className='logo__img' src='./logoReverse.svg' alt='logo'/>
        </Link>
      </div>

      <div className='menu'>
        <div className='btn' onClick={handleCloseMenu}>
            <i className='fas fa-times close-btn'></i>
        </div>
        <Link to='/careerServices'>
          Career Services
        </Link>

        <Link to='/requestForm'>
          Request Info
        </Link>

        <div className='btn' onClick={handleOpenMenu}>
          <i className='fas fa-bars menu-btn'></i>
        </div>
      </div>
      
    </div>
*/
