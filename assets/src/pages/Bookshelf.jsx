import React from 'react';
import { useHistory} from 'react-router-dom';


const Bookshelf = () => {
    const history = useHistory();
    return (

<div>
<h2>Only the Best in Books!</h2>

<div className="bookshelf">

            <article className="bookshelf__books" onClick={() => history.push('./Details')}>
                <img className="bookshelf__books__cover" src = {require ('/assets/images/wickedcover.jpg')}></img>
                <h3 className="bookshelf__books__title">Harry Potter and the Sorcerer's Stone</h3>
                <p className="bookshelf__books__author">J.K. Rowling</p>
            </article>
            <article className="bookshelf__books">
                <img className="bookshelf__books__cover" src={require ('/assets/images/wickedcover.jpg')}></img>
                <h3 className="bookshelf__books__title">Wicked</h3>
                <p className="bookshelf__books__author">Gregory Maguire</p>
            </article>
            <article className="bookshelf__books">
                <img className="bookshelf__books__cover" src={require("/assets/images/harrypotter_SorcSt.jpeg")}></img>
                <h3 className="bookshelf__books__title">Book Title</h3>
                <p className="bookshelf__books__author">J.K. Rowling</p>
            </article>
            <article className="bookshelf__books">
                <img className="bookshelf__books__cover" src="assets/images/harrypotter_SorcSt.jpeg"></img>
                <h3 className="bookshelf__books__title">Book Title</h3>
                <p  className="bookshelf__books__author">J.K. Rowling</p>
            </article>
            <article className="bookshelf__books">
                <img className="bookshelf__books__cover" src="assets/images/harrypotter_SorcSt.jpeg"></img>
                <h3 className="bookshelf__books__title">Book Title</h3>
                <p className="bookshelf__books__author">J.K. Rowling</p>
            </article>,
            <article className="bookshelf__books">
                <img className="bookshelf__books__cover" src="assets/images/harrypotter_SorcSt.jpeg"></img>
                <h3 className="bookshelf__books__title">Book Title</h3>
                <p className="bookshelf__books__author">J.K. Rowling</p>
            </article>
            <article className="bookshelf__books">
                <img className="bookshelf__books__cover" src="assets/images/harrypotter_SorcSt.jpeg"></img>
                <h3 className="bookshelf__books__title">Book Title</h3>
                <p className="bookshelf__books__author">J.K. Rowling</p>
            </article>
            <article className="bookshelf__books">
                <img className="bookshelf__books__cover" src="assets/images/harrypotter_SorcSt.jpeg"></img>
                <h3 className="bookshelf__books__title">Book Title</h3>
                <p className="bookshelf__books__author">J.K. Rowling</p>
            </article>
            </div>
            </div>
        );
};


export default Bookshelf