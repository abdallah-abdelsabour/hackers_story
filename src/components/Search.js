import React, { Fragment } from "react";

// function labledInput({ id, type = "text", onSearch, lable, searchWord }) {
//   console.log(65646);

//   return (
//     <Fragment>
//       <label htmlFor={lable}> search </label>

//       <input id={id} type={type} onChange={onSearch} value={searchWord}></input>
//       <p>
//         search for <strong>{searchWord}</strong>
//       </p>
//     </Fragment>
//   );
// }

const Search = ({ onSearch, searchWord, isFocused }) => {
  return (
    <Fragment>
      <label htmlFor="search"> search </label>

      <input
        autoFocus={isFocused}
        // id={"search"}
        type={"text"}
        onChange={onSearch}
        value={searchWord}
      ></input>
      <p>
        search for <strong>{searchWord}</strong>
      </p>
    </Fragment>
  );
};
export default Search;
