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
import AdvanceSearch from './pages/Search/AdvanceSearch';
import Basket from './pages/Basket/Basket';
import Footer from './pages/Footer/Footer';
import { NavLink} from 'react-router-dom';
import { Button } from 'react-bootstrap';

const App = (props) => {
  const [books, setBooks] = useState(data);
  const [keyword, setKeyword ] = useState('');
  const [bookcase, setBookcase] = useState([]);
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [basket, setBasket] = useState([]);
  const [basketBooks, setBasketBooks] = useState(data);
  const [page, setPage] = useState('');
  
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
  }

//  add to basket function - not working

function addBook2 (title, id) {
  const newBookList = books.filter(book => book.id !== id);
  const chosenBook = books.filter(book => book.id === id);
  setBooks (newBookList);
  setBookcase ([...bookcase, ...chosenBook]);
  const remainingBooks = [];
}

  function newBasket (title, id) {
    const newBasketItem = books.filter(book => book.id !== id);
    const chosenBasketItem = books.filter(book => book.id === id);
    setBasketBooks (newBasketItem);
    setBasket ([...basket, ...chosenBasketItem]);   
    const remaningBasket = [];
  }

// calls the book info from the API
  async function findBooks (term) {
      const result = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${term}&filter=paid-ebooks&print-type=books&projection=lite`)
      .then(res => res.json());
      console.log (result)
      setBooks(result.items)
  }

// async function findAuthor (value, authorValue) {
//   const result = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${value}:${authorValue}`)
//   .then(res => res.json());
//   setBooks(result.items)
// }

// async function findTitle (value, titleValue) {
//   const result = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${value}${titleValue}`)
//   .then(res => res.json());
//   setBooks(result.items)
// }


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

let basketPage = bookcase.length ==0
? <p>Basket is empty</p>
: <Button classname= 'basketButton'>Buy</Button>;


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
            <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword} />
            <BookList books={bookcase} books={books} addBook={addBook} addBook2={addBook2} />
            < Footer />
            </React.Fragment> 
        )}/>
            <Route exact path="/pages/About" render={() => (
            <React.Fragment>
            <Header />
            <About />
            </React.Fragment> 
        )}/>
            <Route exact path="/pages/Contact" render={() => (
            <React.Fragment>
            <Header addBook={addBook} />
            <Contact />
            </React.Fragment> 
        )}/>
            <Route exact path="/pages/SubmittedForm" render={() => (
            <React.Fragment>
            <Header  />
            <SubmittedForm />
            <Footer />
            </React.Fragment> 
        )}/>
            <Route path="/bookcase" render={() => (
            <React.Fragment>
            <p className='added'>Added to bookcase: {bookcase.length}</p>
            <Header  />
            <NavLink to='/pages/Basket/Basket'>
            </NavLink>
            {bookcasePage}
            <BookList books={bookcase} removeBook={removeBook}/>
            < Footer />
            </React.Fragment> 
        )}/>
            <Route exact path="/pages/AdvanceSearch" render={() => (
            <React.Fragment>
            <p className='added'>Added to bookcase: {bookcase.length}</p>
            <Header />
            <AdvanceSearch books={bookcase} books={books} findBooks={findBooks} keyword={keyword} setKeyword={setKeyword}  author={author} setAuthor={setAuthor} title={title} setTitle={setTitle} />
            <Footer />
            </React.Fragment> 
        )}/>   
          <Route exact path="/pages/Basket/Basket" render={() => (
            <React.Fragment>
            <Header />
            <BookList books={bookcase} removeBook={removeBook} />
            {basketPage}
            {/* <Button onClick>Buy</Button> */}
            <Footer />
            </React.Fragment>  
          )}/>
        </Router>
 </>
 );
};



ReactDOM.render(<App />,document.getElementById('root'));

export default App;



// I tried to have a go at this but not sure this is even slightly correct

// import pagination from "react-js-pagination";

// const pagination = ({booksPerPage, totalBooks, paginate}) => {
//     const pageNumbers = [];

//     for(let i =1 i <=(totalBooks / booksPerPage); i++) {
//         pageNumbers.push(i);
//     }
// return (
//     <nav>
//     <ul>
//         {pageNumbers.map(number => (
//          <li key={number}>
//              <a onClick={() => paginate(number)} href='!#''>  
//              {number}
//           </li>
//     </ul>
//      </nav>
// )
// }

//   This is attempt at Pagination
//   const pageNumbers = () => {
//   const [bookResults, getBookResults] = useState([]);
//   const [loading, setLoading] = setState(false);
//   const [currentPage, setCurrentPage] = useState (1);
//   const [booksPerPage, setBooksPerPage] = usestate (5);

//   useEffect (( ) => {
//       const fetchbookReults = async () => {
//       setLoading(true);
//       const res = await axios.get ('https://www.googleapis.com/books/v1/volumes?q=${term}&filter=paid-ebooks&print-type=books&projection=lite')
//         getBookResults(res.data);
//         setLoading(false);
//     }

//     fetchbookReults();
// },[]);

// This is where pagination ends

