import React from "react";

function Item(props) {
  console.log(props);
  return (
    // <div></div>

    <li key={props.key}>
      <span>
        <a href={props.url}>{props.title}</a>
      </span>
      <span>{props.author}</span>
      <span>{props.num_comments}</span>
      <span>{props.points}</span>
    </li>
  );
}

export default Item;
