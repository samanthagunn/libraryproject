import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';


const Search = () => {
    const location = useLocation();
    return (


<div className="main">
    <input type="text" placeholder="Search..."></input>
    <button type="submit"><i class="fa fa-search"></i></button>
</div>
);
};

export default Search;