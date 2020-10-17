// import React, { useState, useEffect } from 'react';
// import booksPerPage from './Pagination'

// const Searching = () => {
//     const [loading, setLoading] = useState(flase);    
//     const [currentPage, setCurrentPage] = useState(1);
//     const [booksPerPage, setBooksPerPage] = useState(5);
    
//     useEffect (() => {
//         const fetchBooks = async () => {
//             setLoading(true);
//             const res = await fetch (`https://developers.google.com/books/docs/overview`);
//             then(res => res.json());
//             setLoading(false);
//     }
//         fetchBooks();
//     }[]);a

//     const indexOfCurrentPost = currentPage * booksPerPage;
//     const indexofFirstBook = indexOfLastBook - booksPerPage;
//     const currentBook = books.slice(indexofFirstBook, indexOfLastBook);





//     const Book = ({ books, loading}) => {
//         if(loading) {
//             return <h3>Loading</h3>
//         }
//     }

//     const paginate = pageNumber => setCurrentPage(pageNumber);

//     return {
//         <div>
//        <button>Name/Author/Keyword</button>
//        <Pagination booksPerPage={booksPerPage} totalPost= {books.length} paginate={paginate}/>
//        </div>
//     }