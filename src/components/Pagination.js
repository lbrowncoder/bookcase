// import React, {useState} from 'react';
// import Book from './Book';
// import Pagination from "react-js-pagination";

// const BookList = (props) => {
//     const booksPerPage = 3
//     const [ activePage, setCurrentPage ] = useState()
//     const indexOfLastBook  = activePage * booksPerPage;
//     const indexOfFirstBook = indexOfLastBook - booksPerPage;
//     const currentBooks = props.books.slice( indexOfFirstBook, indexOfLastBook );
//     const renderBooks = currentBooks.map( ( book ) => {
//       return <Book key={book.id} book={book} addBook={props.addBook} removeBook={props.removeBook}/>
//    } );
//     const pageChange = ( pageNumber ) => {
//       setCurrentPage( pageNumber )
//    };
//     return (
//       <>
//       {renderBooks}
//           <div>
//               <Pagination
//                  activePage={ activePage }
//                  itemsCountPerPage={ 2 }
//                  totalItemsCount={ props.books.length }
//                  pageRangeDisplayed={ 4 }
//                  onChange={ pageChange }
//               />
//            </div>
//       </>
//     );
    
