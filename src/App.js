import React, { useState } from "react";
import Todo from "./components/Todo";
import Header from "./components/Header";
import AddNote from "./components/AddNote";

const todoList = [
  {
    id: "123",
    title: "Learn React",
    description: "Spend an hour per day studying!",
  },
  { id: "345", title: "Learn NextJS", description: "Finish Max's class" },
  {
    id: "567",
    title: "Learn GraphQL",
    description: "Start a project to learn more fully",
  },
  {
    id: "789",
    title: "Spend time with jay!",
    description: "Watch some shows and go on errands together today!",
  },
];

const App = () => {
  const [list, setList] = useState(todoList);
  const [search, setSearch] = useState("");

  const findIdx = (itemId) => {
    return list.findIndex((item) => item.id === itemId);
  };

  const handleDelItem = (itemId) => {
    // Get index of item to delete:
    const itemIndex = findIdx(itemId);
    const newList = list.filter((item) => item !== list[itemIndex]);
    setList(newList);
  };

  const handleTextChange = (id, newText, text) => {
    const itemIndex = findIdx(id);
    text === "title"
      ? (list[itemIndex].title = newText)
      : (list[itemIndex].description = newText);
  };

  const handleListChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredList = () => {
    return list.filter((item) => {
      return (
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())
      );
    });
  };

  const handleNewNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
    };

    const newList = [...list, newNote];
    setList(newList);
  };

  /*
  TODO: 
  1. add new note button and handle click event button
  2. Add 'lifecycle methods' to save to local storage on exit and read from local storage on load
  extras:
  1. group by functionality - based on maybe importance and date
  2. add importance rating: low, medium, high with color tags #F5628B, #F2CD68, #74F284
  3. Sort todo list

  */

  return (
    <div className="main-container">
      <Header onChange={handleListChange} />
      <AddNote onClick={handleNewNote} />
      <div className="cards-container">
        {filteredList().map((item) => {
          return (
            <Todo
              key={item.id}
              item={item}
              handleDelItem={handleDelItem}
              handleTextChange={handleTextChange}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
