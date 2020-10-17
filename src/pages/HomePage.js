import {Link, NavLink} from 'react-router-dom';
import React from 'react';
import './HomePage.css';
import lib from './lib.jpg';
import bookstore from './bookstore.jpg';

function HomePage() {
    return (
        <React.Fragment>  
                <img className='lib' src={bookstore} alt="bookstore" /> 
                <a href="/pages/Search"><h1 className='title'>Welcome to Your Bookcase</h1></a>
                <p className='homeP1'>Search Share Buy</p>
                
                {/* <a href="/pages/Search"><button className='homeBtn'> Enter </button></a> */}

        </React.Fragment>    
    )
}


export default HomePage