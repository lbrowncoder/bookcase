import React from 'react';
import { NavLink} from 'react-router-dom';
import '../Footer/Footer.css';

const Footer = () => {
    return (
        <React.Fragment>
            <div className="footer navbar-fixed-bottom">
                <div className="position-static">
                    <ul>
                        <li className='list'>
                        <NavLink  className='list' to="/pages/About">About</NavLink>
                        </li>
                        <li className='list'>
                        <NavLink className='list' to="/pages/Contact">Contact</NavLink>
                        </li> 
                    </ul>           
                </div>   
            </div>
        </React.Fragment>    
    )
    }
export default Footer