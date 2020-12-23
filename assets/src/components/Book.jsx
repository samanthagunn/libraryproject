import React, { useEffect, useState } from "react";
import { useParams, useHistory} from "react-router-dom";
import regeneratorRuntime from "regenerator-runtime";
// import { books } from '/books.json';
import axios from 'axios';



const Book = () => {
    const bookApi = `https://d8cb98a7-ab8a-4355-92f8-af64683bce24.mock.pstmn.io/get`;
    const [hasError, setErrors] = useState(false);
    const [data, setData] = useState({});

    
    // const { id, title, author } = data;
    async function fetchBooks() {
        const res = await axios
        .get(bookApi);
       res
       .json()
        .then(res => setData(res))
        .catch(err => setErrors(err));
    }


    useEffect(() => {
    
    fetchBooks();
        // .then(res => res.json())
        // .then(res => this.setState({ data: res }))
        
        // .catch(() => this.setState({ hasError: true }))
    }, []);

    return (
    <div>
        <span>{JSON.stringify(data)}</span>
        <hr />
        <span>Has error: {JSON.stringify(hasError)}</span>
        </div>
        );


  
    //     return (
    //     data && data.map(books => {
    //         return (
    //     <div className="bookshelf__books" key={books.id} >
    //     <img className="bookshelf__books__cover" src = {require ('/assets/images/wickedcover.jpg')} alt={books.title}></img>
    //     <h3 className="bookshelf__books__title">{books.title}</h3>
    //     <p className="bookshelf__books__author">{books.author}</p>
    //     </div>
    //     )
    // })
    //     )
   

       
        
   


};


export default Book;

