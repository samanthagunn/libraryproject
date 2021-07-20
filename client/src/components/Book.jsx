import React from "react";
import { Link } from 'react-router-dom';




const Book = ({ book: { id, title, author, img } }) => {

    return (

        <Link to={`/details/${id}-${title}`}>
            <div className="bookshelf__books" >
                <img className="bookshelf__books__cover" src={img} alt={title}></img>
                <h3 className="bookshelf__books__title">{title}</h3>
                <p className="bookshelf__books__author">{author}</p>
            </div>
        </Link>
    )

};


export default Book;

