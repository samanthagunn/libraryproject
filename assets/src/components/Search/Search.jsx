import React, { useState, useEffect } from 'react';
import SearchBox from './SearchBox';
import { getAllBooks } from '/assets/src/utils/api';



const Search = () => {


    return (


        <div className="mainnav__search">
            <SearchBox />

        </div>

    );

};

export default Search;