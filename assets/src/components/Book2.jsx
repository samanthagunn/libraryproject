import React, { useEffect, useState } from "react";
import { useParams, useHistory} from "react-router-dom";
// import { books } from '/books.json';
import axios from 'axios';



const Book = () => {
    const [data, getBooks] = useState('');

    const bookApi = `http://localhost:3000/books`;
    // const { id, title, author } = data;

    useEffect(() => {
        getAllBooks();
    }, []);

    const getAllBooks = () => {
        axios
        .get(bookApi)
       
        .then((res) => {
        const  setBooks  = res.data.books;
        console.log(res);
        getBooks(setBooks);
      
        }) 
        .catch((err) => console.log(err));
    }
    return (
        <BookData data={data}/>
    )

    export default function BookData(props) {
        console.log(props.book)
        return(
             <>
             </>
        )
        }

const setBooks = (props) => {
    const {books} = props;
    if (books.length > 0){ 
        return (
        books.map((book, index) => {
            return (
        <div className="bookshelf__books" key={id} >
        <img className="bookshelf__books__cover" src = {require ('/assets/images/wickedcover.jpg')} alt={title}></img>
        <h3 className="bookshelf__books__title">{title}</h3>
        <p className="bookshelf__books__author">{author}</p>
        </div>
        )
    })
        )
   
} else {
            Return (
            <h2>Potion Brewing- Please Wait</h2>)
        }
        return (
            <>
            {setBooks(props)}
            </>
        )  
        

   }


};


export default Book;

