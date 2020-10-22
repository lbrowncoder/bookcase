import React, {useState} from 'react';
import Book from './Book';
import Pagination from "react-js-pagination";

const BookList = (props) => {
    const booksPerPage = 3
    const [ activePage, setCurrentPage ] = useState(1)
    const pagefLastBook  = activePage * booksPerPage;
    const pagefFirstBook = pagefLastBook - booksPerPage;
    const currentBooks = props.books.slice( pagefFirstBook, pagefLastBook );
    const displayBook = currentBooks.map( ( book ) => {
      return <Book key={book.id} book={book} addBook={props.addBook} removeBook={props.removeBook}/>
   } );
    const pageChange = ( pageNumber ) => {
      setCurrentPage( pageNumber )
   };
    return (
      <>
      {displayBook}
          <div>
              <Pagination
                 activePage={ activePage }
                 itemsCountPerPage={ 2 }
                 totalItemsCount={ props.books.length }
                 pageRangeDisplayed={ 4 }
                 onChange={ pageChange }
              />
           </div>
      </>
    );
    


const BookList = (props) => {
    return (
        <div>
            {props.books.map(book => (
               <>
                <Book key={book.id} book={book} addBook={props.addBook} removeBook={props.removeBook} />
              </>
            ))}
        </div>
     
    )}
            }


export default BookList;