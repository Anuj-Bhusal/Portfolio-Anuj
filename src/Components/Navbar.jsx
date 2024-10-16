import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
          <Link to="/" onClick={handleLinkClick} className={({ isActive }) => (isActive ? "active" : "")}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={handleLinkClick} className={({ isActive }) => (isActive ? "active" : "")}>About</Link>
        </li>
        <li>
          <Link to="/skills" onClick={handleLinkClick} className={({ isActive }) => (isActive ? "active" : "")}>Skills</Link>
        </li>
        <li>
          <Link to="/projects" onClick={handleLinkClick} className={({ isActive }) => (isActive ? "active" : "")}>Projects</Link>
        </li>
        <li>
          <Link to="/blog" onClick={handleLinkClick} className={({ isActive }) => (isActive ? "active" : "")}>Blog</Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleLinkClick} className={({ isActive }) => (isActive ? "active" : "")}>Contact</Link>
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
