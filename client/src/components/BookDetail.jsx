import React from 'react';
import { RatingStar } from "rating-star";
import { Link } from 'react-router-dom';

const BookDetail = ({ book: { id, title, rating, author, pages, synopsis, pubdate, img } }) => {
  const dateFlip = pubdate.split('-').reverse().join('/');

  return (
    <main className="detailpage">

      <section className="detailpage__bookcover">
        <img height="400px" src={img} />
        <div className="bookcover__rating">
          <label htmlFor="rating">Star Rating</label>
          <RatingStar
            id="clickable"
            value="starRating"
            noBorder
            rating={rating}
            colors={{ rear: "gray", mask: "#04898b" }}
            onChange={e => setRating(e.target.value)}
          />
        </div>
      </section>
      <section className="detailpage__details">
        <h1>{title}</h1>
        <h2>{author}</h2>
        <p className="details__publish">Published: {dateFlip}</p>
        <p>Number of Pages: {pages}</p>
        <p>Synopsis: {synopsis}</p>
        <Link to={`/Edit/${id}`}><button className="details__editbook">Edit</button></Link>
      </section>
      <br />
      <br />
    </main>
  );
};

export default BookDetail;