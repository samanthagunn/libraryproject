import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';


const Search = () => {
    const location = useLocation();
    return (


<div className="mainnav__search">
    <input className="mainnav__search--box" type="text" placeholder="Search..."></input>
    <button className="mainnav__search--button" type="submit"><i className="fa fa-search"></i></button>
</div>
);
};

export default Search;