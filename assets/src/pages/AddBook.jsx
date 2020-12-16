import React from 'react';
import { useHistory} from 'react-router-dom';

const AddBook = () => {
    const history = useHistory();
    return (
        <main>
<h2>Add a New Book</h2>

<section className="add-book">
        <form >
            <fieldset>
                <label for="title"> Title </label> <span><input type= "text" id="title" name="title"/></span> <br />
                <label for="author">Author</label><span> <input type ="text" id="author" name="author" /></span><br />
                <label for="synopsis">Synopsis</label><span> <textarea type ="comment" id="synopsis" name="synopsis"></textarea></span>
            <div className="book-drop">
            <div className="book-drop__pubdate">
            <label  for="published">Published</label> <span><input type ="date" id="pubdate" name="pubdate"/ ></span>
        </div>

        <div className="book-drop__pages">
            <label  for="pages">Pages</label> 
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
            <span className="fa fa-star"></span>
            <br />
            <br />
            <br />
            
            <div className="formbuttons"><button type ="submit">Submit</button> <button type="reset">Cancel</button></div>
            </fieldset>
        </form>
        
        <div className="book-cover">

            <label for="book-cover">Add Image</label>
    
            <input type="file" id="book-cover" name="book-cover" accept="image/png, image/jpeg"/>
            </div>
           </section>
           </main>
        );
    };

export default AddBook;