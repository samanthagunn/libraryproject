import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    return (

        

        <nav className="myLinks" id="myLinks">
        <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to ="/Bookshelf">Bookshelf</NavLink></li>
        <li><NavLink to="/AddBook">Add Book</NavLink> </li>
        {/* <li id="mobilesearch"><input type="text" placeholder="Search...">
            <button type="submit"><i className="fa fa-search"></i></button>
            </li> */}
        </ ul>
        {/* <div className="mainnav__icon">
            <a
            role="button"
            className={`mainnav__icon ${isOpen && "is-active"}`}
            onClick={() => setOpen(!isOpen)}
            >
            <i class="fas fa-bars"></i>  
            </a>
        </div> */}
    </ nav>
    );
};

export default Navbar;
