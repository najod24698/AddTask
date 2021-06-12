import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import '../styles/Search.css';

function Search() {
    return (
        <div className="search">
            <div className="search__bar">
                <SearchIcon style={{fontSize: "20px"}}/>
                <input type="text" placeholder="Search or start new chat" id="search__input"/>
            </div>
        </div>
    )
}

export default Search
