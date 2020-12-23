import axios from 'axios';

const bookApi = `http://localhost:3000/books`;

export const getAllBooks =() => {
    return axios.get(bookApi);
};