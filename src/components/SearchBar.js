import React from 'react';

const SearchBar = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input name="searchTerm" value={props.searchTerm} type="text" onChange={props.handleChange}/>
      <input type="submit" value="Search" />
    </form>
  )
}

export default SearchBar;
