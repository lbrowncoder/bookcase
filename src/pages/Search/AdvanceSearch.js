import React, { useState } from 'react';
import '../Search/Search.css';

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
    return (
            <div>
                <form onSubmit={handleSearchSubmit}>
                    <div>
                        <p className="searchText">Search by Author or Title</p>
                        <div className="searchTabel">
                            
                            <input type="text" placeholder="Author"value={author} onChange={(event)=>setAuthor(event.target.value)}/>
                            <button className= 'authorSearch'onClick={() => findAuthor()} type='submit'>Author Search</button>
                        
                            <input type="text" placeholder="Title" value={title} onChange={(event)=>setTitle(event.target.value)}/>
                            <button className= 'titleSearch'onClick={() => findTitle()} type='submit'>Title Search</button>
                        </div>
                    </div>
                </form> 
                {books && <ul className="advancedSearchResults">
                    {books.map((book) => {
                  let {title, authors, description, imageLinks} = book.volumeInfo 
                        return (
                            <>
                            <div className='box1'>
                                <h2 className='bookTitle'>{title}</h2>
                                {imageLinks && <img className="pic" src= {imageLinks.thumbnail || imageLinks.smallThumbnail} alt={props.alt}/>}
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
    )}
 
   
export default AdvanceSearch;