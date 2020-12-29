import React, { useState, useEffect } from 'react';






const SearchBox = (props) => {
   

    return (
        <div className="mainnav__search">
            <form >
                <input className="mainnav__search--box" type="search"
                    placeholder={"Search  Author/Title"}
                    value={props.searchTerm}
                    onChange={props.handleChange}

                />
                <button className="mainnav__search--button"
                    onClick={(e)=>props.handleChange} value="search"
                    type="submit"><i className="fa fa-search"></i></button>

            </form>
        </div>
    )
};

export default SearchBox;