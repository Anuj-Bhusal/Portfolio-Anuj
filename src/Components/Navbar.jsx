import React, { useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import LOGO1 from '../assets/LOGO1.png';
import menu_open from '../assets/menu_open.svg';
import menu_close from '../assets/menu_close.svg';

const Navbar = () => {
  let navigate = useNavigate();
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  const handleLinkClick = () => {
    closeMenu(); // Close the menu when a link is clicked
  }

  return (
    <div className='navbar'>
      <img src={LOGO1} alt="logo" />
      <img src={menu_open} onClick={openMenu} alt="Open Menu" className='nav-mob-open' />
      
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt="Close Menu" className="nav-mob-close" />
        <li>
          <NavLink to="/" onClick={handleLinkClick} className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={handleLinkClick} className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
        </li>
        <li>
          <NavLink to="/skills" onClick={handleLinkClick} className={({ isActive }) => (isActive ? "active" : "")}>Skills</NavLink>
        </li>
        <li>
          <NavLink to="/projects" onClick={handleLinkClick} className={({ isActive }) => (isActive ? "active" : "")}>Projects</NavLink>
        </li>
        <li>
          <NavLink to="/blog" onClick={handleLinkClick} className={({ isActive }) => (isActive ? "active" : "")}>Blog</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={handleLinkClick} className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
        </li>
      </ul>
      <button className='nav-connect' 
        onClick={() => {
          handleLinkClick(); // Close the menu when "Get in touch" is clicked
          navigate('/contact', { replace: true });
        }}>
        Get in touch
      </button>
    </div>
  );
};

export default Navbar;
