import React from "react";

function List(props) {
  console.log(props);
  return props.stories.map(function (item) {
    return (
      <li key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </li>
    );
  });
}

export default List;
