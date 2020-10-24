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

 
