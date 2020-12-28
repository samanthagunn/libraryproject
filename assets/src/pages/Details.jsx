import React, { useEffect, useState } from 'react';
import BookDetail from '../components/BookDetail';
import regeneratorRuntime from "regenerator-runtime";
// import getBook from '../utils/api';
import axios from 'axios';

const bookApi = `http://localhost:3000/books`;



const Details = ({ match }) => {
    const {
        params: { id },
    } = match;

    const [book, setBook] = useState(null);
    

    useEffect(() => {

         
          axios.get(`${bookApi}/${id}`)
          .then(({ data: books }) => setBook(books))
          .catch((err) => console.log(err));
        
    }, [id]);
        
    console.log(setBook);

    return (
       <main>
           <div>
      
     {book && <BookDetail book={book} />}
     
     </div>
       </main>

    );
};

export default Details;