import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import './HeaderStyle.css';



const Header = () => {
    return (
        <React.Fragment>
            <h1>My Bookcase</h1>
            <Link className='navBar1'to="/">Home</Link>
            <Link className='navBar' to="./pages/About">About</Link>
            <Link className='navBar'to="./pages/Contact">Contact</Link>
        </React.Fragment>    
    )
}


export default Header