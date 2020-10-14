import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import './HeaderStyle.css';



const Header = () => {
    return (
        <React.Fragment>
            <div className='header'>
            <   Link className='navBar1'to="/">Home</Link>
                <Link className='navBar' to="./pages/About">About</Link>
                <Link className='navBar'to="./pages/Contact">Contact</Link>
            </div>
            <div>
                <h1 className='title'>My Bookcase</h1>
            </div>
        </React.Fragment>    
    )
}


export default Header