import React, { useState } from "react";
import "./Todo.css";

const Todo = ({ item, handleDelItem, handleTitleChange }) => {
  const [text, setText] = useState(item.title);

  const deleteHandler = () => {
    handleDelItem(item.id);
  };

  const textChangeHandler = (event) => {
    // implement wait for 1/2-1 second before setting the text
    handleTitleChange(item.id, event.target.value);
    setText(event.target.value);
  };

  const textDeleteHandler = () => {
    setText("");
  };

  return (
    <div className="card">
      <div>
        <textarea
          className="card__title"
          type="text"
          value={text}
          onChange={textChangeHandler}
          onClick={textDeleteHandler}
        />
        <p className="card__description">{item.description}</p>
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
