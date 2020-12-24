import Axios from "axios";
import React, { Component, useState } from "react";
import { RatingStar } from "rating-star";



const AddBookForm = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [synopsis, setSynopsis] = useState('')
    const [pubdate, setPubdate] = useState('')
    const [pages, setPages] = useState('')
    const [rating, setRating] = useState(0);
    const bookApi = `http://localhost:3000/books`;
    const [isSent, setIsSent] = useState(false)
    const [titleErr, setTitleErr] = useState({});
    const [authorErr, setAuthorErr] = useState({});



    const submit = (e) => {
        e.preventDefault()
        if (isValid) {
            Axios.post((bookApi), { title, author, synopsis, pubdate, pages, rating })
            setTitle('')
            setAuthor('')
            setSynopsis('')
            e.target.reset();
        }
        if (!isValid) {
            alert("Unable to add book, please try again")
        }
        // .then(res=>{
        //     console.log(res);
        //     console.log(res.data);
        // }) 
        // .then(() => setIsSent(true))
        // .catch(() => alert("Unable to add book, please try again"))
        const isValid = formValidation();

    };
    const formValidation = () => {
        const titleErr = {};
        const authorErr = {};
        let isValid = true;

        if (title.trim().length < 3) {
            titleErr.titleShort = "This title is too short";
            isValid = false;
        }
        if (author.trim().length < 3) {
            authorErr.authorShort = "Author name is too short";
            isValid = false;
        }
        setTitleErr(titleErr);
        setAuthorErr(authorErr);
        return isValid;
    };

    const reset = () => {
        setTitle('');
        setRating(0);
        setSynopsis('');
        setPubdate('');
        setAuthor('');
    };
    const onRatingChange = val => {
        setRating(val);
    };


    return (
        <main>


            <section className="add-book">
                <form onSubmit={submit}>
                    <fieldset>
                        <label htmlFor="title"> Title {Object.keys(titleErr).map((key) => {
                            return <div style={{ color: "red" }}>{titleErr[key]}</div>
                        })} </label> <span><input
                            type="text"
                            id="title"
                            name="title"
                            value={title}
                            onChange={e => setTitle(e.target.value)} /></span> <br />

                        <label htmlFor="author">Author {Object.keys(authorErr).map((key) => {
                            return <div style={{ color: "red" }}>{authorErr[key]}</div>
                        })}</label><span> <input
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
                        {/* <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span> */}
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
                </div>
            </section>
        </main>

    );

};

export default AddBookForm;