import React, { useState } from 'react';
import data from './models/books.json';
import Book from './components/Book';
import CSS from './components/book.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import BookList from './components/BookList';
import About from './pages/About'
import ReactDOM from 'react-dom';
import Contact from './pages/Contact';
import SubmittedForm from './pages/SubmittedForm';
import Search from './pages/Search';

const App = (props) => {
 const [books, setBooks] = useState(data);

 
 function addBook (title, id) {
     const newBookList = books.filter(book => book.id !== id);
    setBooks (newBookList);
     console.log('The book ${title} was clicked')
  }
 return (
     <>
        <Router>
            <Route exact path="/" render={() => (
            <React.Fragment>
            <Header />
            <Search />
            <BookList books={books} addBook={addBook}/>
            </React.Fragment> 
        )}/>
            <Route exact path="/pages/About" render={() => (
            <React.Fragment>
            <Header />
            <Search />
            <About />
            </React.Fragment> 
        )}/>
            <Route exact path="/pages/Contact" render={() => (
            <React.Fragment>
            <Header />
            <Search />
            <Contact />

            </React.Fragment> 
        )}/>
        </Router>
 {/* <div>
    {books.map(book => <Book addBook={addBook} key={book.id} book={book}/>)}
 </div> */}
 </>
 );
}


export default App;
ReactDOM.render(<App />,document.getElementById('root'));


