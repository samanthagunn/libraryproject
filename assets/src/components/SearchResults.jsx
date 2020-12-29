import React, { useState, useEffect } from 'react';
import Search from './Search/Search';

import { getAllBooks } from '../utils/api';
import axios from 'axios';

const bookApi = `http://localhost:3000/books`;


const getBooks =() => {
    return axios.get(bookApi);
};


const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = e => setSearchTerm(e.target.value);

  useEffect(() => {
      getBooks()
      .then(({ data: books }) => searchResults(books))
      .catch((err) => console.log(err));
      const results = searchResults.filter(o => o.keywords.includes(searchTerm));
    setSearchResults(results);
  }, [searchTerm]);

   

	
  return (
    <>
      <h1>Title List</h1>
      {searchResults &&
            searchResults.map(item => <li key={item.id}>{item.title}</li>)}
    </>
   );
}

export default SearchPage