import React from 'react';

const SearchBar = (props) => {
    return (
        <div className="search-bar-wrapper">
            <input 
                type="search" 
                className="search-bar"
                onChange={(e) => props.onChangeSearch(e)}
            />
            <button
                className="btn"
                onClick={(e) => props.onChangeByHighestPrice(e, props.books)}>Sort by price</button>
        </div>
    );
}

export default SearchBar;