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



const App = (props) => {
 const [books, setBooks] = useState(data);
 const [keyword, setKeyword ] = useState('');
 const [bookcase, setBookcase] = useState([]);
 const [author, setAuthor] = useState('');
 const [title, setTitle] = useState('');
 const [basket, setBasket] = useState([]);
 const [page, setPage] = useState('')
 


 
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
const addToBasket = (id) => {
  setBasket([...basket, ...id])
  console.log('we are in basket')


  
  // const [page, setPage] = useState('bookProducts');

    // const newBasket = books.filter(book => book.id !== id);
    // const buyBook = books.filter(book => book.id === id)
    // setBooks (newBasket);
    // setBasket ([...basket, ...buyBook])
    // const remainingBooks = [];
  
}
  
// calls the book info from the API
  async function findBooks (term) {
      const result = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${term}&filter=paid-ebooks&print-type=books&projection=lite`)
      .then(res => res.json());
      console.log (result)
      setBooks(result.items)
  }
  // 

async function findAuthor (value, authorValue) {
  const result = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${value}:${authorValue}`)
  .then(res => res.json());
  setBooks(result.items)
}

async function findTitle (value, titleValue) {
  const result = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${value}${titleValue}`)
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
            <Header /> 
            <p className='added'>Added to bookcase: {bookcase.length}</p>
            <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword} />
            <BookList books={books} addBook={addBook}/>
            <BookList books={bookcase} removeBook={removeBook} addToBasket={addToBasket} />
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
            <p className='added'>Added to bookcase {bookcase.length}</p>
            <button>Go To Basket {bookcase.length}</button>
            {bookcasePage} {addToBasket}
            <BookList books={bookcase} removeBook={removeBook} addToBasket={addToBasket} />
            </React.Fragment> 
        )}/>
            <Route exact path="/pages/AdvanceSearch" render={() => (
            <React.Fragment>
            <Header />
            <AdvanceSearch findBooks={findBooks} keyword={keyword} setKeyword={setKeyword} findAuthor={findAuthor} author={author} setAuthor={setAuthor} title={title} findTitle={findTitle} setTitle={setTitle} />
            </React.Fragment> 
        )}/>   
          <Route exact path="/pages/Basket/Basket" render={() => (
            <React.Fragment>
            <Header />
            <Basket addToBasket={addToBasket} />
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

