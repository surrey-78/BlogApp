
import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">My Blog Site</h1>
      <nav className="header-nav">
        <Link to="/" className="header-button">Home</Link>
        <Link to="/add-blogs" className="header-button">Add Blogs</Link>
        <Link to="/edit-blogs" className="header-button">Edit Blogs</Link>
        <Link to="/delete-blogs" className="header-button">Delete Blogs</Link>
        <Link to="/about" className="header-button">About Us</Link>
        <Link to="/contact" className="header-button">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;
