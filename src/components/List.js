import React from "react";
import Item from "./Item.js";
function List(props) {
  console.log(props);
  return props.stories.map(function ({ objectID, ...item }) {
    return <Item key={objectID} {...item}></Item>;
  });
}

export default List;
