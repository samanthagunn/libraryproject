import React from 'react';
import { useHistory} from 'react-router-dom';

const Landing = () => {
    const history = useHistory();
    return (

<main className="home">
        <div className="home__hero">
        
        <div className="home__hero-text">
            <h1 className="home__hero-text--title"> Welcome to the Library of Magic</h1>
        <p>Your letter to Hogwarts is probably lost in the mail. Never fret, begin your studies here.</p>
    </div>
    </div>  

        <section className="home__main">
            <h2 >About the Library</h2>
            <p>
                Founded by the fine founders of Magical Books we are pleased to offer a complete collection for young aspiring witches and wizards. No need to break into Gringotts or start counting your Galleons, Sickles, or Knuts due to a very genrous benefactor we are able to offer our collection at no charge.
            </p>
            <p>Peruse our collection at your leisure and enjoy the exceptionally curated content spanning acrossing the wizarding world.</p>
        <button className="home__seebooks" onClick={() => history.push('./Bookshelf')}>See Books</button>
        <p>Did you find that missing piece of magical literature? Add to the magical collection with just a swish and flick of the hand. </p>
        <button className="home__addbooks" onClick={() => history.push('./AddBook')}>Add a Book</button>
        </section>
<br />
<br />
    </main>
        );
    };
    
export default Landing;