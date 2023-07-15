import React, { useEffect } from 'react';
import { useState } from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import {MenuItems} from './MenuItems';
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
    // Remove the token from local storage
    localStorage.removeItem('token');
    // Redirect to the home page
    window.location.href = '/';
  };
  
  useEffect(() => {
    userService.getUserById().then((res) => {
      setUser(res.data.data);
    });
  }
  , []);

  const [state, setState] = useState({ clicked: false });

  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };

  const isLoggedIn = localStorage.getItem('token');
  let loginOrLogoutButton;
  let cartButton;
  let profileButton;

  if (isLoggedIn) {
    loginOrLogoutButton = (
      <button onClick={handleLogout}>Logout</button>
    );
    cartButton = (
      <li>
         <i className="fas fa-shopping-cart" onClick={()=>setshowCart(true)}></i> 
        
      </li>
    );
    profileButton = (
      <li>
      <button onClick={() => setShowProfile(!showProfile)}>
        <i className="fas fa-user"></i> 
       

      </button>
      {showProfile && (
        <div className="profile-container">
          <h2>My Profile</h2>

          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>

          <input type="password" placeholder="new password" value={newpassword} onChange={(e) => setPassword(e.target.value)} />
          <input type="password" placeholder="confirm new password"  value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>

          <button onClick={() => {
            if (newpassword === confirmPassword) {
              userService.updatePassword(newpassword).then((res) => {
                console.log(res);
                message.success('Password updated successfully');
                handleLogout();
              });
            } else {
              message.error('Passwords do not match');
            }
          }}>Update Password</button>

          <button onClick={() => setShowProfile(false)}>Close</button>

        </div>
      )}
    </li>
    );
  } else {
    loginOrLogoutButton = (
      <button onClick={() => { window.location.href = '/login'; }}>
        Login
      </button>
    );
  }

  return (
    <>
      <nav className='NavbarItems'>
        <h1 className='navbar-logo'>RecipeVerse</h1>
        <div className="menu-icons" onClick={handleClick}>
          <i className={state.clicked ? "fas fa-times" : "fas fa-bars"}></i>  
        </div>
        <ul className={state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i> {item.title}
                </Link>
                
              </li>
            );
      
          })}
          <span>{cartButton}</span>
          <span>{profileButton}</span>
          
          <div class="dropdown">
              <span class="dropdown-text">{user.username}</span>
              <div class="dropdown-content">
              <div>{loginOrLogoutButton}</div>
            </div>
          </div>
          
                        <span>{loginOrLogoutButton}</span>

         
        </ul>
      </nav>
      {showCart && <Cart setshowCart={setshowCart} />}
    </>
  );
}

export default NavBar;