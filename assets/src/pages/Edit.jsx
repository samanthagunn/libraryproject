import React, {useEffect, useState} from 'react';
import { useHistory} from 'react-router-dom';
import EditBookForm from '../components/EditBookform';
import axios from "axios";

const Edit = ({match}) => {
    const {
        params: { id },
    } = match;

    const [book, setBook] = useState(null);
    
    const bookApi = `http://localhost:3000/books/`;
  
    useEffect(()=> {
        axios.get(`${bookApi}/${id}`)
        .then(({ data: books }) => setBook(books))
        .catch((err) => console.log(err));
    }, [id]);
    
   
    return (
<main>
        <h2> Edit Book</h2>
        <section className="add-book">
        {book && <EditBookForm book={book} />}
           
        </section>
    </main>
        );
};
        export default Edit;