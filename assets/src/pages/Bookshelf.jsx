import React from 'react';
import { useHistory} from 'react-router-dom';
import Book from '../components/Book';


const Bookshelf = () => {
    const history = useHistory();
    return (

<main>
<h2>Only the Best in Books!</h2>

<div className="bookshelf">
<Book />

            
            </div>
            </main>
        );
};


export default Bookshelf;