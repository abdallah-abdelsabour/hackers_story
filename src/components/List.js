import React from "react";
import Item from "./Item.js";
function List(props) {
  console.log("list component ");
  console.log(props.stories);

  return props.stories.map(function ({ objectID, ...item }) {
    return (
      <Item
        key={objectID}
        onRemove={props.onRemove}
        objectID={objectID}
        // onRemove={props.onRemove}
        {...item}
      ></Item>
    );
  });
}

export default List;
