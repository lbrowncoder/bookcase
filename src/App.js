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
     console.log('bookcase')
  }

//   function removeBook () {

//   }

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
            <Header />
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
            <Search />
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
            <BookList books={bookcase} removeBook/>
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


