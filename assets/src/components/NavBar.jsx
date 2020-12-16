import React from 'react';
import { Spiral as Hamburger } from 'hamburger-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import '../styles/components/navbar.js';



    <Hamburger onToggle={toggled => {
        if (toggled) {
           // open a menu
        } else {
           // close a menu
        }
      }} />

const Navbar = () => {
    const location = useLocation();
    return (

        
        <nav className="myLinks" id="myLinks">
        <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to ="/Bookshelf">Bookshelf</NavLink></li>
        <li><NavLink to="/AddBook">Add Book</NavLink> </li>
       <li><a className="mainnav__icon" onToggle={Hamburger}>    
        <i className="fas fa-bars"></i> 
        </a></li>
        </ ul>
        
    </ nav>

    );
};

export default Navbar;
