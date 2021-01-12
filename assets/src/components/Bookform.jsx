import Axios from "axios";
import React, { Component, useState } from "react";
import { RatingStar } from "rating-star";




const AddBookForm = () => {
    const [bookData, setBookData] = useState({
        "title": '',
        'author': '',
        'synopsis': '',
        'pubdate': '',
        'pages': '',    
})
    
    // const [title, setTitle] = useState('')
    // const [author, setAuthor] = useState('')
    // const [synopsis, setSynopsis] = useState('')
    // const [pubdate, setPubdate] = useState('')
    // const [pages, setPages] = useState('')
    const [rating, setRating] = useState(0);
    const [titleErr, setTitleErr] = useState({});
    const [authorErr, setAuthorErr] = useState({});
    const bookApi = `http://localhost:3000/books`;
    



    const submit = (e) => {
        e.preventDefault()
        const isValid = formValidation();
        if (isValid) {
            Axios.post((bookApi), {...bookData, rating});
            setBookData('');
            setRating(0);
            
            e.target.reset();
            alert("Book successfully added!")

        }
        if (!isValid) {
            alert("Unable to add book, please try again")
        }



    };
    const formValidation = () => {
        const titleErr = {};
        const authorErr = {};
        let isValid = true;

        if (bookData.title.trim().length < 3) {
            titleErr.titleShort = "This title is too short";
            isValid = false;
        }
        if (bookData.author.trim().length < 3) {
            authorErr.authorShort = "Author name is too short";
            isValid = false;
        }
        setTitleErr(titleErr);
        setAuthorErr(authorErr);
        return isValid;
    };

    const reset = () => {
        setBookData('');
        setRating(0);
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
                            value={bookData.title}
                            onChange={e => setBookData({...bookData, title: e.target.value})} /></span> <br />

                        <label htmlFor="author">Author {Object.keys(authorErr).map((key) => {
                            return <div style={{ color: "red" }}>{authorErr[key]}</div>
                        })}</label><span> <input
                            type="text"
                            id="author"
                            name="author"
                            value={bookData.author}
                            onChange={e => setBookData({...bookData, author: e.target.value})} /></span><br />

                        <label htmlFor="synopsis">Synopsis</label><span> <textarea
                            type="comment"
                            id="synopsis"
                            name="synopsis"
                            value={bookData.synopsis}
                            onChange={e => setBookData({...bookData, synopsis: e.target.value})}></textarea></span>
                        <div className="book-drop">
                            <div className="book-drop__pubdate">
                                <label htmlFor="published">Published</label> <span><input
                                    type="date"
                                    id="pubdate"
                                    name="pubdate"
                                    value={bookData.pubdate}
                                    onChange={e => setBookData({...bookData, pubdate: e.target.value})} /></span>
                            </div>

                            <div className="book-drop__pages">
                                <label htmlFor="pages">Pages</label>
                                <select name="pages"
                                    value={bookData.pages}
                                    onChange={e => setBookData({...bookData, pages: e.target.value})} >
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
                </div>
            </section>
        </main>

    );

};

export default AddBookForm;