import React from 'react';

function SearchBar() {
  return(
    <div className="SearchBar">
      <div className="SearchBox">
        <label>Search: </label>  
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit">Search</button>
      </div>
      <div className="FilterOptions">
        <div className="PrintType">
          <label>Print Type: </label>
          <select>
            <option className="options" value="All" selected>All</option>
            <option className="options" value="Option-1">Option 1</option>
          </select>
        </div>
        <div className="BookType">
          <label>Book Type: </label>  
          <select>
            <option className="options" value="no-filter" selected>No Filter</option>
            <option className="options" value="option-1">Option 1</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default SearchBar;