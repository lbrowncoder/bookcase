import React, {useState} from 'react';
import Book from '../Book/Book';
import Pagination from "react-js-pagination";
import '../Booklist/BookList.css'

const PageNumber = (props) => {
    const booksPerPage = 3
    const [activePage, setCurrentPage ] = useState(1)
    const pageofLastBook  = activePage * booksPerPage;
    const pageofFirstBook = pageofLastBook - booksPerPage;
    const currentBooks = props.books.slice(pageofFirstBook, pageofLastBook);
    
    const displayBook = currentBooks.map((book) => {
      return <Book key={book.id} book={book} addBook={props.addBook} addBook2={props.addBook2} removeBook={props.removeBook} newBasket={props.newBasket} />
   } );
    const pageChange = (pageNumber) => {
      setCurrentPage(pageNumber)
   };

    return (
      <>
      {displayBook}
          <div>
              <Pagination className= 'pagination'
                 activePage={activePage}
                 itemsCountPerPage={2}
                 totalItemsCount={props.books.length}
                 activePageNumber={'active hidden'} 
                 pageRangeDisplayed={5}
                 onChange={pageChange}/> 
           </div>
      </>
    );
    
const BookList = (props) => {
    return (
        <div>
            {props.books.map(book => (
               <>
                <Book key={book.id} book={book} addBook={props.addBook} removeBook={props.removeBook} newBasket={props.newBasket} />
              </>
            ))}
        </div>
     
    )}
}


export default PageNumber;