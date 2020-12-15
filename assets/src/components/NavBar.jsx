import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import '../styles/components/navbar.js';

const Navbar = () => {
    const location = useLocation();
    return (

        
        <nav className="myLinks" id="myLinks">
        <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to ="/Bookshelf">Bookshelf</NavLink></li>
        <li><NavLink to="/AddBook">Add Book</NavLink> </li>
      
        </ ul>
        <a className="mainnav__icon" onclick="hamburger()">    
        <i className="fas fa-bars"></i> 
        </a>
    </ nav>

    );
};

export default Navbar;
