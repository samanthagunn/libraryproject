import React, { useState} from 'react';
import SearchBox from './SearchBox';



const Search = () => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');

    return (


        <div className="mainnav__search">
            <SearchBox 
            searchQuery={searchQuery}
               setSearchQuery={setSearchQuery}
               />
        </div>

    );

};

export default Search;