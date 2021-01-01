import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { getAllBooks } from '/assets/src/utils/api';



const SearchBox = () => {

    const [books, setBooks] = useState([]);
    let history = useHistory();



    let searchTerm = (titleAuthor) => {
        axios.get(`http://localhost:3000/books`)
            .then(({ data: books }) => setBooks(books))
            .then((books) => {
                return sortBooks(books, titleAuthor)
            })
            .then((books) => setBooks(books));
        let sortBooks = (bookData, titleAuthor) => {
            let regex = RegExp(`^${titleAuthor}`, "i");
            return bookData.filter(
                (book) => regex.test(book.author) || regex.test(book.title)
            );
        };
    };


    return (
        <div className="mainnav__search">


            <input className="mainnav__search--box" type="search"
                placeholder={"Search Author/Title"}
                onChange={(e) => {
                    if (e.target.value !== "") {
                        searchTerm(e.target.value);
                    } else {
                        setBooks([]);
                    }
                }}

            />
            <button className="mainnav__search--button"
                onClick={e => setSearchTerm(e.target.value)} value="search"
                type="submit"><i className="fa fa-search"></i></button>



            <ul className="mainnav__search--dropdown" id="search-results">
                {books.map((book, key) => {
                    return (
                        <button
                            id="result"
                            className="mainnav__search--droplist"
                            key={key}
                            onClick={() => { history.push(`/details/${book.id}-${book.title}`) }}
                        >
                            <p className="mainnav__search--droplistitem">
                                {(book.title)},&nbsp;
                    {(book.author)}
                            </p>
                        </button>
                    );
                })}
            </ul>

        </div>
    );
};

export default SearchBox;