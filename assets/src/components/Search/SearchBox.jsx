import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { getAllBooks } from '/assets/src/utils/api';


const SearchBox = ({ searchQuery, setSearchQuery }) => {


    const history = useHistory();
    const [books, setBooks] = useState([]);
    const onSubmit = e => {
        history.push(`?s=${searchQuery}`)
        e.preventDefault()
    };


    const bookFilter = (books, query) => {
        const littleQuery = query.toLowerCase();
        
        useEffect(() => {

            getAllBooks()
                .then(({ data: books }) => { setBooks(books); return books; })
                .catch((err) => console.log(err));

        }, [littleQuery]);
    
        if (!littleQuery) {
            return null;
        }
        return books.filter((book) => {
            const bookTitle = book.title.toLowerCase();
            const bookAuthor = book.author.toLowerCase();
            return bookTitle.includes(littleQuery) || bookAuthor.includes(littleQuery)
        });



    };

    const filteredBooks = bookFilter(books, searchQuery);

    return (
        <div >

            <form action="/" method="get" autoComplete="off" onSubmit={onSubmit}>

                <input className="mainnav__search--box"
                    value={searchQuery}
                    onInput={e => setSearchQuery(e.target.value)}
                    type="search"
                    placeholder={"Search Author/Title"}


                />
                <button className="mainnav__search--button"
                    type="submit"><i className="fa fa-search"></i></button>
            </form>
            <div>
                {filteredBooks ? (
                    <ul className="search__dropdown" id="search-results">

                        {filteredBooks.map((book, key) => {

                            return (
                                <div
                                    id="result"
                                    className="search__droplist "
                                    key={key}
                                    onClick={() => { history.push(`/details/${book.id}-${book.title}`) }}
                                >
                                    <p className="mainnav__search--droplistitem">
                                        {(book.title)},&nbsp;
                    {(book.author)}
                                    </p>
                                </div>
                            );
                        })}

                    </ul>) : (null)}
            </div>
        </div>
    );
};

export default SearchBox;