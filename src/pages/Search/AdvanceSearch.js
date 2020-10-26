import React from 'react';
import '../Search/Search.css';
import { useHistory } from "react-router";



const AdvanceSearch = (props) => {

    function handleSearchSubmit (event) {
        event.preventDefault ();
        props.findAuthor(props.keyword, props.author);
        props.findTitle(props.keyword, props.title);
        
        
    }


return (
    <form onSubmit={handleSearchSubmit}>
        <p className="searchText">Search by Author, Title or keyword</p>
        <div className="searchTabel">
        
         <input type="text" value={props.keyword} onChange={(event)=>props.setKeyword(event.target.value)}/> 
        <button onClick={props.keyword} type='submit'>keyword Search</button>
        
        <input type="text" value={props.author} onChange={(event) =>props.setAuthor(event.target.value)}/>
        <button onClick={props.findAuthor, props.keyword} type='submit'>Author Search</button>

        <input type="text" value={props.title} onChange={(event) =>props.setTitle(event.target.value)}/>
        <button onClick={props.findTitle, props.keyword} type='submit'>Title Search</button>
        </div>
    </form>    
)
}

export default AdvanceSearch

 



// import React from 'react';
// import '../Search/Search.css';
// import Book from '../../components/Book/Book';
// import { Button } from 'react-bootstrap';

//  function handleSearchSubmit (event) {

//     const AdvanceSearch = (props) => {
//         props.book(props.keyword, props.author, props.title)
   
//     return (
//         <div>
//             {props.books.map(book => (
//                <>
//                 <Book key={book.id} book={book} findAuthor={props.author} findTitle={props.title} keyword={props.keyword} />
               
//                 <form onSubmit={handleSearchSubmit}>
//                     <p className="searchText">Search by Keyord, Author or Title </p>
//                         <div className="searchTabel">
//                             {props.keyword && (
//                             <Button className='keySearchBox' onClick={() => props.keyword} type='submit'>keyword</Button>)}
//                             {props.author && (
//                             <Button className='authorSearchBox' onClick={() => props.author()} type='submit'>Author</Button>)}
//                             {props.title && (
//                             <Button className='titleSearchBox' onClick={() => props.title()} type='submit'>Title</Button>)}
                            
//                         </div>
//                 </form>  
//               </>
//             ))}
//         </div>
     
//     )}}

//     export default AdvanceSearch
