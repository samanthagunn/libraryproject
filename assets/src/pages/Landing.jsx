import React from 'react';
import { useHistory} from 'react-router-dom';

const Landing = () => {
    const history = useHistory();
    return (

<main className="home">
        <div className="home__hero">
        
        <div className="home__hero-text">
            <h1 className="home__hero-text--title"> Welcome to the Library</h1>
        <p>Creative Book Text</p>
    </div>
    </div>  

        <section className="home__main">
            <h2 >About the Library</h2>
            <p>
                Fluke hogshead loot handsomely landlubber or just lubber Sail ho belay carouser spyglass rigging. Fire ship deadlights Cat o'nine tails lugger sutler bowsprit hang the jib draft jib nipperkin. Loaded to the gunwalls spanker list pirate hang the jib strike colors yard parrel Jolly Roger holystone.
            </p>
        <button className="home__seebooks" onClick={() => history.push('./Bookshelf')}>See Books</button>
        <p>Arr tender Blimey list spirits hail-shot hardtack pinnace chase poop deck. Mutiny code of conduct booty weigh anchor jolly boat hearties lad Jack Ketch ballast bilge water. Poop deck belaying pin rigging wench bring a spring upon her cable tack lanyard pirate measured fer yer chains chantey.</p>
        <button className="home__addbooks" onClick={() => history.push('./AddBook')}>Add a Book</button>
        </section>
<br />
<br />
    </main>
        );
    };
    
export default Landing;