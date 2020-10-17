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
import Search from './pages/Search';
import SubmittedForm from './pages/SubmittedForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchScreen from './pages/SearchScreen';
import HomePage from './pages/HomePage';
import BookcaseCart from './pages/BookcaseCart'

const App = (props) => {
 const [books, setBooks] = useState(data);
 const [keyword, setKeyword ] = useState('');
 const [bookcase, setBookcase] = useState([]);

 
 function addBook (title, id) {
     const newBookList = books.filter(book => book.id !== id);
     const chosenBook = books.filter(book => book.id === id);
    setBooks (newBookList);
    setBookcase ([...bookcase, ...chosenBook]);
    const remainingBooks = [];
  }

  function removeBook (id) {
    const newBookcaseList = bookcase.filter((book) => book.id !== id);
    setBookcase(newBookcaseList);
    // if (newBookcaseList.length === 0? 'No items in your Bookcase');
    }
  

  async function findBooks (term) {
      const result = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${term}&filter=paid-ebooks&print-type=books&projection=lite`)
      .then(res => res.json());
      console.log (result)
      setBooks(result.items)
  }
 return (
     <>
        <Router>
           <Route exact path="/" render={() => (
            <React.Fragment>
            <HomePage />
            </React.Fragment> 
        )}/>
            <Route exact path="/pages/Search" render={() => (
            <React.Fragment>
            <Header />
            <BookcaseCart />
            <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword} />
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
            <Contact />
            </React.Fragment> 
        )}/>
            <Route exact path="/pages/SubmittedForm" render={() => (
            <React.Fragment>
            <Header />
            <SubmittedForm />
            </React.Fragment> 
        )}/>
            <Route path="/bookcase" render={() => (
            <React.Fragment>
            <Header />
            <BookList books={bookcase} removeBook={removeBook}/>
            </React.Fragment> 
        )}/>

            <Route exact path="/pages/SearchScreen" render={() => (
            <React.Fragment>
            <Header />
            </React.Fragment> 
        )}/>    
        </Router>
 </>
 );
}


export default App;
ReactDOM.render(<App />,document.getElementById('root'));


