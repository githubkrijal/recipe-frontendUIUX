import React, { useState } from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';

const SideBar = ({ setActiveComponent }) => {
  const [show, setShow] = useState(false);

  const handleLinkClick = (component) => {
    setActiveComponent(component);
    setShow(false);
  }

  const handleLogOut= () => {
      // Remove the token from local storage
      localStorage.removeItem('token');
      // Redirect to the home page
      window.location.href = '/';
  }

  return (
    <main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
        </div>
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
          <div>
            <Link to='/admin' className='nav-logo'>
              <i className={`fas fa-home-alt nav-logo-icon`}></i>
              <span className='nav-logo-name'>RecipeVerse</span>
            </Link>

            <div className='nav-list'>
              <Link to='/admin' className='nav-link active' onClick={()=>handleLinkClick('Dashboard')}>
                <i className='fas fa-tachometer-alt nav-link-icon'></i>
                <span className='nav-link-name'>Dashboard</span>
              </Link>
              <Link to='/admin' className='nav-link' onClick={() => handleLinkClick('Users')}>
                <i className='fas fa-users nav-link-icon'></i>
                <span className='nav-link-name'>Users</span>
              </Link>
              <Link to='/admin' className='nav-link' onClick={() => handleLinkClick('Products')}>
                <i className='fas fa-boxes nav-link-icon'></i>
                <span className='nav-link-name'>Products</span>
              </Link>
              <Link to='/admin' className='nav-link' onClick={() => handleLinkClick('Orders')}>
                <i className='fas fa-shopping-cart nav-link-icon'></i>
                <span className='nav-link-name'>Orders</span>
              </Link>           
            </div>
          </div>

          <Link to='/' className='nav-link' onClick={handleLogOut}>
            <i className='fas fa-sign-out nav-link-icon'></i>
            <span className='nav-link-name'>Logout</span>
          </Link>
        </nav>
      </aside>
    </main>

  );
};

export default SideBar;