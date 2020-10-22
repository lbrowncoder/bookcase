import React from 'react';
import './Search.css';



function AdvanceSearch (props) {

    function handleSearchSubmit (event) {
        event.preventDefault ();
        props.setKeyword(props.keyword);
        props.setAuthor(props.author);
        props.setTitle(props.title);
    }
return (
    <>
    <form onSubmit={handleSearchSubmit}>
        <p className="searchText">Search by Author, Title or keyword</p>
        <div className="searchTabel">
        <input type="text" value={props.author} onChange={(event) =>props.setAuthor(event.target.value)}/>
        <button >Author Search</button>

        <input type="text" value={props.keyword} onChange={(event)=>props.setKeyword(event.target.value)}/>
        <button >Keyword Search</button>
        
        <input type="text" value={props.title} onChange={(event) =>props.setTitle(event.target.value)}/>
        <button >Title Search</button>
        </div>
    </form>    
</>
)
}

export default AdvanceSearch