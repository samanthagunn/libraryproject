import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import Search from './Search';


export default function Header(){
    return (
        <div className="mainnav">
        <h1 className="mainnav__sitetitle">The Library</h1>

      <NavBar />
      <Search />
       </div>
    );
};

