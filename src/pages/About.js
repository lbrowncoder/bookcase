import React from 'react';
import './AboutStyle.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';



let About = () => {
    return (
        <> 
        <div>
            <h2>Welcome to my bookcase</h2>
            <p>The following application was createdd by Me. This bookcase app displays a list of books that a user can save to a local bookcase</p>
            <p> Click on the add button to add a book to your bookcase. Use the search bar to find the latest books by name, author or description.</p>
         </div>
        </>
    )};

{/* <Router>
   <Route exact path="/About" render={() => (
    <React.Fragment>
    <Header />
    <About />
    </React.Fragment> 
     )}/>
    <Route exact path="/Contact" render={() => (
    <React.Fragment>
    <Header />
   <Contact />
    </React.Fragment> 
    )}/>
</Router>

       */}

export default About