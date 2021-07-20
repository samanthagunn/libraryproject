import React, { useEffect, useState } from 'react';
import BookDetail from '../components/BookDetail';
import axios from 'axios';

const allBooksApi = `https://my-json-server.typicode.com/samanthagunn/libraryproject/books`;



const Details = ({ match }) => {
    const {
        params: { id },
    } = match;

    const [book, setBook] = useState(null);


    useEffect(() => {
        axios.get(`${allBooksApi}/${id}`)
            .then(({ data: books }) => setBook(books))
            .catch((err) => console.log(err));

    }, [id]);

    // console.log(setBook);

    return (
        <main>
            <div>

                {book && <BookDetail book={book} />}

            </div>
        </main>

    );
};

export default Details;