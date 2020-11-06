import React from 'react';
import '../Search/Search.css';

function Search (props) {
    function handleSubmit (event) {
        event.preventDefault ();
        props.findBooks(props.keyword);
        props.findBooks(props.title)
    }
    return (
    <>
    <div>
            <p className='find'>What will you discover next?</p>
        </div>
            <form className='searchBar' onSubmit={handleSubmit}>
            <input type="text" placeholder="Keyword"value={props.keyword} onChange={(event)=>props.setKeyword(event.target.value)}/>
            <button className='searchButton1'>Quick Search</button>   
        </form>
    </>    
    );
}

export default Search
