import React, { useState } from 'react';
import { Spiral as Hamburger } from 'hamburger-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Burger from './Burger';
import NavDrop from './NavDrop';



const Navbar = (props) => {
    const location = useLocation();
    const [open, setOpen] = useState(false);

    return (

        
        <nav >
        <ul className="myLinks" id="myLinks">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to ="/Bookshelf">Bookshelf</NavLink></li>
        <li><NavLink to="/AddBook">Add Book</NavLink> </li>
        </ ul>
        <div className="icon">
        <Burger open={open} setOpen={setOpen}>
            <NavDrop />
            </Burger>
        </div>
    </ nav>

    );
};

export default Navbar;
