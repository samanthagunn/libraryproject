import React, { useEffect, useState } from 'react';
import Book from '../components/Book';
import { getAllBooks } from '../utils/api';
import Search from '../components/Search/Search';

const Bookshelf = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        getAllBooks()
            .then(({ data: books }) => setBooks(books))
            .catch((err) => console.log(err));
    }, []);
    // console.log(books);
    
    return (

        <main>
            <h2>Only the Best in Books!</h2>
            <div className="search__mobile">
            <Search /></div>
            {books ? (
                <div className="bookshelf">
                    {books.map((book) => (
                        <Book key={book.id} book={book}/>
                    ))}
                    </div>
            ) : (
                <div><h3>No Books Available</h3></div>
            )}
            
            

            
        </main>
    );
};


export default Bookshelf;