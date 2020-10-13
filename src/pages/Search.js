import React, { useState } from 'react';

function Search () {
    const [ keyword, setKeyword] = useState('')
    return (
        <form>
            <input type="text" value={keyword} onChange={(event)=>setKeyword(event.target.value)}/>
            <button onClick>Search</button>
            {keyword}
        </form>
    );
}

export default Search