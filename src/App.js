import React, { useState, useEffect } from "react";
import Todo from "./components/Todo";
import Header from "./components/Header";
import AddNote from "./components/AddNote";

const App = () => {
  const [list, setList] = useState([]);
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

  const handleTextChange = (id, newText, textType) => {
    const itemIndex = findIdx(id);
    const newList = [...list];
    textType === "title"
      ? (newList[itemIndex].title = newText)
      : (newList[itemIndex].description = newText);

    setList(newList);
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
    const newList = [newNote, ...list];
    setList(newList);
  };

  // Lifecycle methods

  useEffect(() => {
    const ourList = JSON.parse(localStorage.getItem("list"));
    if (ourList) {
      setList(ourList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

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
