import Axios from "axios";
import React, { useState } from "react";
import { RatingStar } from "rating-star";
import { Link, useHistory} from 'react-router-dom';

const bookApi = `http://localhost:3000/books`;


const EditBookForm = (props) => {
    const [editBook, setEditBook] = useState({
        'id': props.book.id,
        'title': props.book.title, 
        'author': props.book.author,
        'synopsis': props.book.synopsis,
        'pudate': props.book.pubdate,
        'pages': props.book.pages,
           })
    // const [id] = useState(props.book.id)
    // const [title, setTitle] = useState(props.book.title)
    // const [author, setAuthor] = useState(props.book.author)
    // const [synopsis, setSynopsis] = useState(props.book.synopsis)
    // const [pubdate, setPubdate] = useState(props.book.pubdate)
    // const [pages, setPages] = useState(props.book.pages)
    const [rating, setRating] = useState(props.book.rating);
    const history = useHistory();

    const submit = (e) => {
        history.push(`/bookshelf`);
        e.preventDefault()
        Axios.put((`${bookApi}/${editBook.id}`), {...editBook, rating})
            .then(res => console.log(res.data));
        e.target.reset();
        


    };

    
    const onRatingChange = val => {
        setRating(val);
    };


    return (
        <main>


            <section className="add-book">
                <form onSubmit={submit}>
                    <fieldset>
                        <label htmlFor="title"> Title  </label> <span><input
                            type="text"
                            id="title"
                            name="title"
                            value={editBook.title}
                            onChange={e => setEditBook({ ...editBook, title: e.target.value })} /></span> <br />

                        <label htmlFor="author">Author </label><span> <input
                            type="text"
                            id="author"
                            name="author"
                            value={editBook.author}
                            onChange={e => setEditBook({ ...editBook, author: e.target.value })} /></span><br />

                        <label htmlFor="synopsis">Synopsis</label><span> <textarea
                            id="synopsis"
                            name="synopsis"
                            value={editBook.synopsis}
                            onChange={e => setEditBook({ ...editBook, synopsis: e.target.value })}></textarea></span>
                        <div className="book-drop">
                            <div className="book-drop__pubdate">
                                <label htmlFor="published">Published</label> <span><input
                                    type="date"
                                    id="pubdate"
                                    name="pubdate"
                                    value={editBook.pubdate}
                                    onChange={e => setEditBook({ ...editBook, pubdate: e.target.value })} /></span>
                            </div>

                            <div className="book-drop__pages">
                                <label htmlFor="pages">Pages</label>
                                <input
                                    type="number" 
                                    min="1"
                                    name="pages"
                                    value={editBook.pages}
                                    onChange={e => setEditBook({ ...editBook, pages: e.target.value })} />
                                    
                            </div>

                        </div><br />
                        <label htmlFor="rating">Star Rating</label>
                        <RatingStar
                            id="clickable"
                            value="starRating"
                            clickable
                            noBorder
                            rating={rating}
                            onRatingChange={onRatingChange}
                            colors={{ rear: "gray", mask: "#04898b" }}
                            onChange={e => setRating(e.target.value)}
                        />

                        <br />
                        <br />
                        <br />

                        <div className="formbuttons"><button type="submit">Submit</button>
                           <Link to ="/bookshelf"><button type="cancel"
                               >Cancel</button></Link> </div>
                    </fieldset>
                </form>

                <div className="book-cover">

                    <label htmlFor="book-cover">Add Image</label>

                    <input type="file" id="book-cover" name="book-cover" accept="image/png, image/jpeg" />
                    <br /> <button id="delete" onClick={() => props.deleteBook(props.book.id)}>Delete Book</button>
                </div>
            </section>
        </main>

    );

};

export default EditBookForm;