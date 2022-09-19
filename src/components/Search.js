import React from "react";

const Search = (props) => {
  return (
    <div>
      <label htmlFor="search"> search </label>

      <input id="search" type={"text"} onChange={props.onSearch}></input>
      <p>
        search for <strong>{props.searchWord}</strong>
      </p>
    </div>
  );
};
export default Search;
