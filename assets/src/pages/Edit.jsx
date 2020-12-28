import React from 'react';
import { useHistory} from 'react-router-dom';


const Edit = () => {
    const history = useHistory();
    return (
<main>
        <h2> Edit Book</h2>
        <section className="add-book">
        
            <form >
                <fieldset>
                    <label htmlFor="title"> Title </label> <span><input type= "text" id="title" name="title" /></span><br />
                    <label htmlFor="author">Author</label><span> <input type ="text" id="author" name="author" /></span><br />
                    <label htmlFor="synopsis">Synopsis</label><span> <textarea type ="comment" id="synopsis" name="synopsis"></textarea></span><br />
                <div className="book-drop">
                <div className="book-drop__pubdate">
                <label  htmlFor="published">Published</label> <span><input type ="date" id="pubdate" name="pubdate" /></span>
            </div>
            <div className="book-drop__pages">
                <label  htmlFor="pages">Pages</label> 
                <select  name="pages">
                    <option value="under100">Under 100</option>
                    <option value="100-300">100-300</option>
                    <option value="over300">Over 300</option>
                </select>
            </div>
            </div><br />
                <label htmlFor="rating">Star Rating</label>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span><br /><br />
                <br />
                
                <div className="formbuttons"><button type ="submit">Submit</button> <button type="reset">Cancel</button></div>
            </fieldset>
            </form>
            <div className="book-cover">
    
                <label htmlFor="book-cover">Add Image</label><br />
        
                <input type="file" id="book-cover" name="book-cover" accept="image/png, image/jpeg" />
                <br /><button id="delete">Delete Book</button>    
            </div>
    
        </section>
    </main>
        );
};
        export default Edit;