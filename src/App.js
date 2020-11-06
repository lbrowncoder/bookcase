import React, { useEffect, useState } from 'react';
import data from './models/books.json';
import './components/Book/Book.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import BookList from './components/Booklist/BookList';
import About from './pages/About/About'
import ReactDOM from 'react-dom';
import Contact from './pages/Contact/Contact';
import Search from './pages/Search/Search';
import SubmittedForm from './pages/SubmittedForm/SubmittedForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage/HomePage';
import './App.css';
import Footer from './pages/Footer/Footer';
import { Button } from 'react-bootstrap';
import AdvanceSearch from'./pages/Search/AdvanceSearch';

const App = (props) => {
    const [books, setBooks] = useState(data);
    const [keyword, setKeyword ] = useState('');
    const [bookcase, setBookcase] = useState([]);
    const [author, setAuthor] = useState([]);
    const [title, setTitle] = useState([]);
   
  
    function addBook (title, id) {
        const newBookList = books.filter(book => book.id !== id);
        const chosenBook = books.filter(book => book.id === id);
        setBooks (newBookList);
        setBookcase ([...bookcase, ...chosenBook]);
      }

    function removeBook (id) {
      const newBookcaseList = bookcase.filter((book) => book.id !== id);
      setBookcase(newBookcaseList);
    }

    //  add to basket function -
    function addBook2 (title, id) {
        const newBookList = books.filter(book => book.id !== id);
        const chosenBook = books.filter(book => book.id === id);
        setBooks (newBookList);
        setBookcase ([...bookcase, ...chosenBook]);
    }

      async function findBooks (term) {
        const result = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${term}&filter=paid-ebooks&print-type=books&projection=lite`)
        .then(res => res.json());
        console.log (result)
        setBooks(result.items)
      }
      async function findAuthor() {
        const result = await fetch(`https://www.googleapis.com/books/v1/volumes?q=author%${author}`)
        .then(res => res.json());
        setBooks(result.items)
    }

     async function findTitle() {
        const result = await fetch(`https://www.googleapis.com/books/v1/volumes?q=title%${title}`)
        .then(res => res.json());
        setBooks(result.items)
}

//   useEffect(() => {
//     findBooks();
// }, []);

    useEffect (() => {
                document.title = bookcase.length === 0
                    ? "Your Bookcase"
                    : `Added ${bookcase.length}`;
            });

    let bookcasePage = bookcase.length ===0
        ? <p className= "bookPage">Bookcase is empty- Add books to begin</p>
        : null;

    let basketPage = bookcase.length ===0
        ? <p className='basketText'>Basket is empty</p>
        : <Button classname='basketButton'>Buy</Button>;

// routing
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
            <p className='added'>Added to bookcase: {bookcase.length}</p>
            <Header />         
            <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword} findTitle={findTitle}/>
            <BookList bookcase={bookcase} books={books} addBook={addBook} addBook2={addBook2} />
            <Footer />
            </React.Fragment> 
        )}/>
            <Route exact path="/pages/About" render={() => (
            <React.Fragment>
            <Header />
            <About />
            <Footer />
            </React.Fragment> 
        )}/>
            <Route exact path="/pages/Contact" render={() => (
            <React.Fragment>
            <Header />
            <Contact />
            <Footer />
            </React.Fragment> 
        )}/>
            <Route exact path="/pages/SubmittedForm" render={() => (
            <React.Fragment>
            <Header />
            <SubmittedForm />
            <Footer />
            </React.Fragment> 
        )}/>
            <Route path="/bookcase" render={() => (
            <React.Fragment>
            <p className='added'>Added to bookcase: {bookcase.length}</p>
            <Header />
            {bookcasePage}
            <BookList books={bookcase} removeBook={removeBook}/>
            <Footer />
            </React.Fragment> 
        )}/> 
            <Route exact path="/pages/AdvanceSearch" render={() => (
            <React.Fragment>
            <p className='added'>Added to bookcase: {bookcase.length}</p>
            <Header />
            <AdvanceSearch book={bookcase} books={books} addBooks={addBook} keyword={keyword} setKeyword={setKeyword}  author={author} setAuthor={setAuthor} title={title} title={findTitle} findTitle={findTitle} />
            <Footer />
            </React.Fragment>  
            )}/>
          <Route exact path="/pages/Basket/Basket" render={() => (
            <React.Fragment>
            <Header />
            <BookList books={bookcase} removeBook={removeBook} />
            {basketPage}
            <Footer />
            </React.Fragment>  
          )}/>    
        </Router>
 </>
 );
};



ReactDOM.render(<App />,document.getElementById('root'));

export default App;