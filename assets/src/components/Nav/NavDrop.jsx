import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Search from '../Search';

const NavDrop = (props) => {
   
    return (
        <nav className='mobileburger' >
        <ul >
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to ="/Bookshelf">Bookshelf</NavLink></li>
        <li><NavLink to="/AddBook">Add Book</NavLink> </li>
        </ ul>
        <Search />
    </ nav>
    )
}

export default NavDrop;