import Axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { RatingStar } from "rating-star";

const bookApi = `http://localhost:3000/books`;


const EditBookForm = (props) => {
    const [id] = useState(props.book.id)
    const [title, setTitle] = useState(props.book.title)
    const [author, setAuthor] = useState(props.book.author)
    const [synopsis, setSynopsis] = useState(props.book.rating)
    const [pubdate, setPubdate] = useState(props.book.pubdate)
    const [pages, setPages] = useState(props.book.pages)
    const [rating, setRating] = useState(props.book.rating);

    const submit = (e) => {
        e.preventDefault()
        Axios.put((`${bookApi}/${id}`), {id, title, author, synopsis, pubdate, pages, rating })
            .then(res => console.log(res.data));
        e.target.reset();


    };

    const deleteBook = ((e) => {
        e.preventDefault()
        Axios.delete(`${bookApi}/${id}`)
            .then(res => console.log(res.data));
    });
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
                            value={title}
                            onChange={e => setTitle(e.target.value)} /></span> <br />

                        <label htmlFor="author">Author </label><span> <input
                            type="text"
                            id="author"
                            name="author"
                            value={author}
                            onChange={e => setAuthor(e.target.value)} /></span><br />

                        <label htmlFor="synopsis">Synopsis</label><span> <textarea
                            type="comment"
                            id="synopsis"
                            name="synopsis"
                            value={synopsis}
                            onChange={e => setSynopsis(e.target.value)}></textarea></span>
                        <div className="book-drop">
                            <div className="book-drop__pubdate">
                                <label htmlFor="published">Published</label> <span><input
                                    type="date"
                                    id="pubdate"
                                    name="pubdate"
                                    value={pubdate}
                                    onChange={e => setPubdate(e.target.value)} /></span>
                            </div>

                            <div className="book-drop__pages">
                                <label htmlFor="pages">Pages</label>
                                <select name="pages"
                                    value={pages}
                                    onChange={e => setPages(e.target.value)}>
                                    <option value="under100">Under 100</option>
                                    <option value="100-300">100-300</option>
                                    <option value="over300">Over 300</option>
                                </select>
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
                            <button type="reset"
                                onClick={() => reset()}
                                value="Cancel">Cancel</button></div>
                    </fieldset>
                </form>

                <div className="book-cover">

                    <label htmlFor="book-cover">Add Image</label>

                    <input type="file" id="book-cover" name="book-cover" accept="image/png, image/jpeg" />
                    <br /> <button id="delete" onClick={(e) => e.target.deleteBook}>Delete Book</button>
                </div>
            </section>
        </main>

    );

};

export default EditBookForm;