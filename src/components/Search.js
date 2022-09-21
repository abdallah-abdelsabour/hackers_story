import React from "react";

const Search = ({ onSearch, searchWord }) => {
  return (
    <div>
      <label htmlFor="search"> search </label>

      <input
        id="search"
        type={"text"}
        onChange={onSearch}
        value={searchWord}
      ></input>
      <p>
        search for <strong>{searchWord}</strong>
      </p>
    </div>
  );
};
export default Search;
