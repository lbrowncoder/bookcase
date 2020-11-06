import React from 'react';
import '../HomePage/HomePage.css';
import bookstore from '../HomePage/Images/bookstore.jpg';

function HomePage() {
    return (
        <React.Fragment>  
                <img className='lib' src={bookstore} alt="bookstore" /> 
                <a href ="/pages/Search"><h1 className='title'>Welcome to Your Bookcase</h1></a>
                <p className='homeP1'>Search | Share | Buy</p>         
        </React.Fragment>   
    ) 
}


export default HomePage