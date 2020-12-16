import React from 'react';
import { useHistory} from 'react-router-dom';

const Details = () => {
    const history = useHistory();
    return (
        <main className="detailpage">
        <section className="detailpage__bookcover">
            <img height="400px" src={require ('/assets/images/wickedcover.jpg')} />
            <div className="bookcover__rating">
            <label htmlFor="rating">Star Rating</label>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span><br /><br />
            </div>
        </section>
        <section className="detailpage__details">
    <h1>Harry Potter and the Sorcerer's Stone</h1>
    <h2> J.K. Rowling</h2>
    <p className="details__publish"> Publish Date</p>
    <p> Pages </p>
    <p>Synopsis</p>
    <button className="details__editbook" onClick={() => history.push('./Edit')}>Edit</button>
        </section>
        
    </main>

        );
    };

export default Details;