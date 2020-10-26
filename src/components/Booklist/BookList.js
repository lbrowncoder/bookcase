import React, {useState} from 'react';
import Book from '../Book/Book';
import Pagination from "react-js-pagination";
import '../Booklist/BookList.css'

const BookList = (props) => {
    const booksPerPage = 3
    const [ activePage, setCurrentPage ] = useState(1)
    const pageofLastBook  = activePage * booksPerPage;
    const pagefFirstBook = pageofLastBook - booksPerPage;
    const currentBooks = props.books.slice( pagefFirstBook, pageofLastBook );
    
    const displayBook = currentBooks.map( ( book ) => {
      return <Book key={book.id} book={book} addBook={props.addBook} removeBook={props.removeBook} addToBasket={props.addToBasket} />
   } );
    const pageChange = ( pageNumber ) => {
      setCurrentPage( pageNumber )
   };
    return (
      <>
      {displayBook}
          <div>
              <Pagination className= 'pagination'
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
                <Book key={book.id} book={book} addBook={props.addBook} removeBook={props.removeBook} addToBasket={props.addToBasket}/>
              </>
            ))}
        </div>
     
    )}
            }


export default BookList;