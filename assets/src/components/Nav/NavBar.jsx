import React, { useState } from 'react';
import { Spiral as Hamburger } from 'hamburger-react';
import { Link, NavLink, useLocation, useHistory } from 'react-router-dom';
import Burger from './Burger';
import NavDrop from './NavDrop';
import Search from '../Search';



const Navbar = (props) => {
    const location = useLocation();
    const [open, setOpen] = useState(false);
    let history = useHistory()
    return (

        
        <nav >
        <ul className="mylinks" id="mylinks">
        <li><NavLink exact to="/"
        activeStyle={{
            color: "#32e0c4"
          }}>Home</NavLink></li>
        <li><NavLink to ="/Bookshelf" activeStyle={{
            color: "#32e0c4"
          
          }}>Bookshelf</NavLink></li>
        <li><NavLink to="/AddBook"
        activeStyle={{
            color: "#32e0c4"
          }}>Add Book</NavLink> </li>
        
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
