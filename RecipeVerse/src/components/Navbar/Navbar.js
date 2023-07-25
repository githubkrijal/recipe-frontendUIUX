import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import Cart from '../Cart/Cart';
import './Navbar.css';
import userService from '../../services/userService';
import { message } from 'antd';

function NavBar() {
  const [showCart, setshowCart] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [user, setUser] = useState({});
  const [newpassword, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  useEffect(() => {
    userService.getUserById().then((res) => {
      setUser(res.data.data);
    });
  }, []);

  const location = useLocation();

  const [state, setState] = useState({ clicked: false });

  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };

  const isLoggedIn = localStorage.getItem('token');
  let loginOrLogoutButton;
  let cartButton;
  let profileButton;
  let registerButton;

  if (isLoggedIn) {
    loginOrLogoutButton = (
      <div className="dropdown">
        <span className="dropdown-text">{user.username}</span>
        <div className="dropdown-content">
          <div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    );
    cartButton = (
      <li>
        <i
          className="fa-regular fa-cart-shopping"
          onClick={() => setshowCart(true)}
          style={{
            marginLeft: '250px',
            marginRight: '25px',
            color: 'black',
            transition: 'color 0.3s ease',
            cursor: 'pointer',
            padding: '1rem',
          }}
          onMouseEnter={(e) => (e.target.style.color = 'red')}
          onMouseLeave={(e) => (e.target.style.color = 'black')}
        ></i>
      </li>
    );
    
    profileButton = (
      <li>
        <button
      onClick={() => setShowProfile(!showProfile)}
      style={{ borderRadius: '50%' }}
    >
      <i className="fas fa-user"></i>
    </button>

        {showProfile && (
          <div className="profile-container">
            <h2>My Profile</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <input
              type="password"
              placeholder="new password"
              value={newpassword}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              onClick={() => {
                if (newpassword === confirmPassword) {
                  userService
                    .updatePassword(newpassword)
                    .then((res) => {
                      console.log(res);
                      message.success('Password updated successfully');
                      handleLogout();
                    });
                } else {
                  message.error('Passwords do not match');
                }
              }}
            >
              Update Password
            </button>
            <button onClick={() => setShowProfile(false)}>Close</button>
          </div>
        )}
      </li>
    );
  } else {
    loginOrLogoutButton = (
      <button onClick={() => (window.location.href = '/login')}>
        Login
      </button>
    );

    registerButton = (
      <li>
        <button onClick={() => (window.location.href = '/register')}>
          Register
        </button>
      </li>
    );
  }

  return (
    <>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">RecipeVerse</h1>
        <div className="menu-icons" onClick={handleClick}>
          <i className={state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={`nav-links ${
                    item.url === location.pathname ? 'active' : ''
                  }`}
                  to={item.url}
                >
                  <i className={item.icon}></i> {item.title}
                </Link>
              </li>
            );
          })}
          {cartButton}
          {profileButton}
          {isLoggedIn ? (
            <li>{loginOrLogoutButton}</li>
          ) : (
            <div
  className="dropdown"
  style={{ margin: '0 50px 0 250px' }} // Add the desired margin value
>
  <span className="dropdown-text">Guest v</span>
  <div className="dropdown-content">
    <div>
      <button onClick={() => (window.location.href = '/login')}>
        Login
      </button>
      <button onClick={() => (window.location.href = '/register')}>
        Register
      </button>
    </div>
  </div>
</div>

          )}
        </ul>
      </nav>
      {showCart && <Cart setshowCart={setshowCart} />}
    </>
  );
}

export default NavBar;
