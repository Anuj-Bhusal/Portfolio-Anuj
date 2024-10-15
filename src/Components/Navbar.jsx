import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import LOGO1 from '../assets/LOGO1.png';

const Navbar = () => {
  let navigate = useNavigate()
  return (
    <div className='navbar'>
      <img src={LOGO1} alt="logo" />
      <ul className='nav-menu'>
        <li>
          <Link to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</Link>
        </li>
        <li>
          <Link to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</Link>
        </li>
        <li>
          <Link to="/skills" className={({ isActive }) => (isActive ? "active" : "")}>Skills</Link>
        </li>
        <li>
          <Link to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>Projects</Link>
        </li>
        <li>
          <Link to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>Blog</Link>
        </li>
        <li>
          <Link to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</Link>
        </li>
      </ul>
      <button className='nav-connect' 
      onClick={
        () => navigate('/contact', {
          replace: true, // Replace the current entry in the history stack
        })
      }>Get in touch</button>
    </div>
  );
};

export default Navbar;
