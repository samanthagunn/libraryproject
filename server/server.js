const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;

const corsOptions = {
  origin: 'http://localhost:1234',
};

app.use(logger('dev'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/dist'));
}

app.get('/books/:id', (request, response) => {
    const bookId = Number(request.params.id);
    const getBook = books.find((book) => book.id === bookId);
    if (!getBook) {
        response.status(500).send('No Books Found')
    } else {
        response.json(getBook);
    }
  });

app.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}!`);
});