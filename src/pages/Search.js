import React from 'react';
import { useState } from 'react';
import './SearchStyle.css';

// const Pagination = ({booksPerPage, totalBooks, paginate}) => {
//     const pageNumbers = [];

//     handlePageChange(pageNumbers) 
//         this.setState({activePage: pageNumbers});
//     }
// }

// const [cart,setCart] = useState([]);

// const addToCart = (products) => {
//     setCart([...cart, products]);
// }

function Search (props) {

    function handleSubmit (event) {
        event.preventDefault ();
        props.findBooks(props.keyword);
    }
    return (
    <>
    <div>
            <p className='find'>What will you discover next?</p>
        </div>
        <form className='searchBar' onSubmit={handleSubmit}>
            <input type="text" value={props.keyword} onChange={(event)=>props.setKeyword(event.target.value)}/>
            <button className='searchButton'>Quick Search</button>
        </form>
        <p>A few of our favourites</p>
    </>    
    );
}

export default Search