import React, { useState } from "react";
import "./Todo.css";

const Todo = ({ item, handleDelItem, handleTextChange }) => {
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);

  const deleteHandler = () => {
    handleDelItem(item.id);
  };

  const textChangeHandler = (event, text) => {
    handleTextChange(item.id, event.target.value, text);
    text === "title"
      ? setTitle(event.target.value)
      : setDescription(event.target.value);
  };

  return (
    <div className="card">
      <div>
        <textarea
          className="card__title"
          type="text"
          value={title}
          onChange={(e) => textChangeHandler(e, "title")}
        />
        <textarea
          className="card__description"
          type="text"
          value={description}
          onChange={(e) => textChangeHandler(e, "description")}
        />
      </div>
      <div className="actions">
        <button onClick={deleteHandler} className="btn card__btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
