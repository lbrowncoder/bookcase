import {Link, NavLink} from 'react-router-dom';
import React from 'react';

function HomePage() {
    return (
        <React.Fragment>
            <div className='header'>
                <NavLink className='navBar1'to="/">Home</NavLink>
                <NavLink className='navBar' to="/pages/About">About</NavLink>
                <NavLink className='navBar'to="/pages/Contact">Contact</NavLink>
                <NavLink className='navBar2'to="/bookcase">Bookcase</NavLink>
                <NavLink className='navBar3'to="/pages/SearchScreen">Advance Search</NavLink>
            </div>   
                <h1 className='title'>Welcome to Your Bookcase</h1>
                <p>Search, Share, Buy</p>
                <button NavLink className='navBar3'to="/pages/Search">ENTER</button>

        </React.Fragment>    
    )
}


export default HomePage