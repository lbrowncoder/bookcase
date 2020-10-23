import {Link, NavLink} from 'react-router-dom';
import React, { useState } from 'react';
import '../Header/Header.css';




const Header = () => {
    return (
        <React.Fragment>
            <div className='header'>
                <NavLink className='navBar1'to="/pages/Search">Home</NavLink>
                <NavLink className='navBar' to="/pages/About">About</NavLink>
                <NavLink className='navBar'to="/pages/Contact">Contact</NavLink>
                <NavLink className='navBar'to="/pages/AdvanceSearch">Advance Search</NavLink>
                <NavLink className='navBar2'to="/bookcase">Bookcase</NavLink>
                
            </div>   
                <h1 className='title'>My Bookcase</h1>
        </React.Fragment>    
    )
}


export default Header