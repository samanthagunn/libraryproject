import React from 'react';

const BookList = ({bookList=[]}) => {
  return (
    <>
    { bookList.map((book,index) => {
        if ({data : books}) {
          return (
            <div key={book.title}>
              <h1>{books.title}</h1>
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default BookList