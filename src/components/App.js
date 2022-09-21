import React, { useEffect, useState } from "react";
import List from "./List";
import Search from "./Search";

const App = () => {
  const list = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchWord, setSearchWord] = React.useState(
    localStorage.getItem("search") || "React"
  );

  // **** inpust search handler
  const formHandler = (event) => {
    setSearchWord(event.target.value);
  };

  let searchStories = list.filter((story) => {
    return story.title.includes(searchWord);
  });

  // sideEffect handler

  useEffect(() => {
    localStorage.setItem("search", searchWord);
  }, [searchWord]);

  // ************** jsx part
  return (
    <ul className="app">
      <h1> just app for fun </h1>
      <Search onSearch={formHandler} searchWord={searchWord}></Search>

      <List stories={searchStories}>fffff</List>
    </ul>
  );
};

export default App;
