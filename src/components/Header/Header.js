import { NavLink} from 'react-router-dom';
import React from 'react';
import '../Header/Header.css';

const Header = (props) => {
    return (
        <React.Fragment>
            <div className='header'>
                <NavLink className='navBar'to="/pages/Search">Home</NavLink>
                <NavLink className='navBar'to="/bookcase">Bookcase</NavLink>
                <NavLink className='navBar'to="/pages/AdvanceSearch">Advance Search</NavLink>
                <NavLink className='navBar'to="/pages/Basket/Basket">Basket</NavLink>
            </div>   
                <h1 className='pageTitle'>My Look Book</h1>
        </React.Fragment>    
    )
}


export default Header