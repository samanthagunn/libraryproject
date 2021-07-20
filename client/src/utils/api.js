import axios from 'axios';

// const bookApi = `http://localhost:3000/books`;

const bookApi = "https://my-json-server.typicode.com/samanthagunn/libraryproject/books";

export const getAllBooks =() => {
    return axios.get(bookApi);
};

export const addBooks =() => {
    return axios.get(bookApi);
};

export const getBook =() => {
    return axios.get(`${bookApi}/${id}`);
};

export const allBooksApi = () => {
    return axios.all(bookApi);
};

