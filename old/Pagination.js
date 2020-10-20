import React from 'react'
import pagination from "react-js-pagination";

const Pagination = ({booksPerPage, totlBooks, paginate}) => {
    const pageNumbers = [];

    for(let i =1 i <=(totalBooks / booksPerPage); i++) {
        pageNumbers.push(i);
    }
}

return {
    <nav>
    <ul>
    {pageNumbers.map(number => (
        <li key={number}>
          <a onClick={() => paginate(number)} href='!#''>  
            {number}
        </li>
    </ul>
    </nav>
}