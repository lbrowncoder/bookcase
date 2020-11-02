import React, { useState } from 'react';
import '../Search/Search.css';
import data from '../../models/books.json';

const AdvanceSearch = (props) => {
    const [books, setBooks] = useState([]);
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [keyword, setKeyword ] = useState('');
    
    function handleSearchSubmit(event) {
        event.preventDefault ();
        findAuthor(keyword, author);
        findTitle(keyword, title); 
    }
    async function findBooks(term) {
        const result = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${term}&filter=paid-ebooks&print-type=books&projection=lite`)
        .then(res => res.json());
        console.log (result)
        setBooks(result.items)
    }
    async function findAuthor(value, authorValue) {
        const result = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${value}:${authorValue}`)
        .then(res => res.json());
        setBooks(result.items)
    }
    async function findTitle(value, titleValue) {
        const result = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${value}:${titleValue}`)
        .then(res => res.json());
        setBooks(result.items)
}

    return (
            <div>
                <form onSubmit={handleSearchSubmit}>
                    <div>
                        <p className="searchText">Search by Author, Title or keyword</p>
                        <div className="searchTabel">
                            <input type="text" value={keyword} onChange={(event)=>setKeyword(event.target.value)}/> 
                            <button className= 'keySearch' onClick={keyword} type='submit'>keyword Search</button>
                            
                            <input type="text" value={author} onChange={(event)=>setAuthor(event.target.authorvalue)}/>
                            <button className= 'authorSearch'onClick={() => findAuthor (keyword)} type='submit'>Author Search</button>
                           
                            <input type="text" value={title} onChange={(event)=>setTitle(event.target.titlevalue)}/>
                            <button className= 'titleSearch' onClick={() => findTitle(keyword)} type='submit'>Title Search</button>
                        </div>
                    </div>
                </form> 
                {books && <ul className="advancedSearchResults">
                    {books.map((book) => {
                        const { title, authors, description, imageLinks } = book.volumeInfo;
                       
                        return (
                            <>
                            <div className='box1'>
                               <h2 className='bookTitle'>{title}</h2>
                                <img className="pic" src= {imageLinks.thumbnail || imageLinks.smallThumbnail} alt={props.alt}/>
                            </div>
                            <div className="text">
                            <p key={authors}>{authors}</p>
                                <p key={description} className='description'>{description}</p> 
                                
                    
                            </div>
                            </>
                            
                        )
                    }
                    )}
                </ul>}
            </div>
    ) 
}    


      
export default AdvanceSearch;

      



// import React, { useState } from 'react';
// import '../Search/Search.css';
// import data from '../../models/books.json';


// const AdvanceSearch = (props) => {

//     const [books, setBooks] = useState(data);
//     const [author, setAuthor] = useState('');
//     const [title, setTitle] = useState('');
//     const [keyword, setKeyword ] = useState('');
    

//     function handleSearchSubmit (event) {
//         event.preventDefault ();
//         findAuthor(keyword, author);
//         findTitle(keyword, title); 
//     }

//     async function findBooks (term) {
//         const result = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${term}&filter=paid-ebooks&print-type=books&projection=lite`)
//         .then(res => res.json());
//         console.log (result)
//         setBooks(result.items)
//     }

//     async function findAuthor (value, authorValue) {
//         const result = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${value}:${authorValue}`)
//         .then(res => res.json());
//         setBooks(result.items)
//     }

//     async function findTitle (value, titleValue) {
//         const result = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${value}${titleValue}`)
//         .then(res => res.json());
//         setBooks(result.items)
// }

// books.map((book) => (
//     <p key={book}>{book}</p>
//  ))
//         return (
//                 <div>
//                     <form onSubmit={handleSearchSubmit}>
//                         <div>
//                             <p className="searchText">Search by Author, Title or keyword</p>
//                             <div className="searchTabel">

//                             <input type="text" value={keyword} onChange={(event)=>setKeyword(event.target.value)}/> 
//                             <button className= 'keySearch' onClick={keyword} type='submit'>keyword Search</button>
                            
//                             <input type="text" value={author} onChange={(event) =>setAuthor(event.target.authorvalue)}/>
//                             <button className= 'authorSearch'onClick={findAuthor, keyword} type='submit'>Author Search</button>

//                             <input type="text" value={title} onChange={(event) =>setTitle(event.target.titlevalue)}/>
//                             <button className= 'titleSearch' onClick={findTitle, keyword} type='submit'>Title Search</button>
                            
//                             <p key={books}>{props.book}</p>

//                             </div>
//                         </div>
//                     </form> 
//                 </div>
//       )}
      


      
// export default AdvanceSearch