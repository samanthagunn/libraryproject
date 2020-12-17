import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import NavBar from './Nav/NavBar';
import NavDrop from './Nav/NavDrop';
import Search from './Search';


export default function Header(){
    const isMobile = window.innerWidth < 1000;
    const showSearch = isMobile;

    return (
        <div className="mainnav">
        <h1 className="mainnav__sitetitle">The Library</h1>

      <NavBar />
      <div className="mainnav__hiddensearch">
      <Search />
      </div>
       </div>
    );
};

