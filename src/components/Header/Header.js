import { NavLink} from 'react-router-dom';
import React, { useState } from 'react';
import '../Header/Header.css';

const Header = (props) => {

    const [bookcase, setBookcase] = useState([]);
    
    return (
        <React.Fragment>
            <div className='header'>
                <NavLink className='navBar'to="/pages/Search">Home</NavLink>
                {/* <NavLink className='navBar' to="/pages/About">About</NavLink>
                <NavLink className='navBar'to="/pages/Contact">Contact</NavLink>  */}
                <NavLink className='navBar'to="/pages/AdvanceSearch">Advance Search</NavLink>
                <NavLink className='navBar'to="/bookcase">Bookcase</NavLink>
                <NavLink className='navBar'to="/pages/Basket/Basket">Basket</NavLink>
            </div>   
                <h1 className='pageTitle'>My Look Book</h1>
        </React.Fragment>    
    )
}


export default Header