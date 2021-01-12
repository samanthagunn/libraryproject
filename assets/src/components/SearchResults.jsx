import React, { useState, useEffect } from 'react';
import Search from './Search';
import TitleList from './TitleList';
import { getAllBooks } from '../utils/api';
import Axios from 'axios';

const SearchPage = () => {
    const [title, setTitleTerm] = useState("");
    const [titleResults, setTitleResults] = useState([]);
   

	
  return (
    <>
      <h1>Title List</h1>
      <Search 
       input={input} 
       onChange={updateInput}
      />
      <ul>
          {titleResults.map(item => (
              <li>{item}</li>
          ))}
      </ul>
    </>
   );
}

export default SearchPage