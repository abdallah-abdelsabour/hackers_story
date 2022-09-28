import React from "react";

function Item(props) {
  return (
    // <div></div>

    <li>
      <span>
        <a href={props.url}>{props.title}</a>
      </span>
      <span>{props.author}</span>
      <span>{props.num_comments}</span>
      <span>{props.points}</span>
      <span>
        <button
          onClick={() => {
            props.onRemove(props.objectID);
          }}
        >
          remove
        </button>
      </span>
    </li>
  );
}

export default Item;
