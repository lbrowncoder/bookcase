import React from 'react';

import { NavLink} from 'react-router-dom';
import '../Footer/Footer.css';

function Footer() { 
    
    return (
        <React.Fragment>
            <footer class="footer">
                <div className="container-fluid">
                    <ul className="list-unstyled">
                        <li className="list">
                        <NavLink className="details" to="/pages/About">About</NavLink>
                        </li>
                        <li className="list">
                        <NavLink className="details" to="/pages/Contact">Contact</NavLink>
                        </li>  
                        <p className="text-xs-center">
                    &copy;{new Date().getFullYear()} LB Desgins- All Rights Reservered</p>
                    </ul> 
                </div> 
            </footer>
        </React.Fragment>    
    )}

export default Footer