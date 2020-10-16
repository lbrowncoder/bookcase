import React from 'react';
import './SearchStyle.css'


function Search (props) {

    function handleSubmit (event) {
        event.preventDefault ();
        props.findBooks(props.keyword);
    }

    return (
    <>
    <div>
            <p className='find'>What will you discover next?</p>
        </div>
        <form className='searchBar' onSubmit={handleSubmit}>
            <input type="text" value={props.keyword} onChange={(event)=>props.setKeyword(event.target.value)}/>
            <button className='searchButto'>Quick Search</button>
        </form>
        
    </>
    );
}

export default Search