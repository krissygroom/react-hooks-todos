import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import Checkbox from "./Checkbox";
import "./Todo.css";
import "./btn.css";

const Todo = ({ item, handleDelItem, handleTextChange }) => {
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const deleteHandler = () => {
    setModalIsOpen(true);
  };

  const confirmDelHandler = () => {
    handleDelItem(item.id);
    closeModalHandler();
  };

  const textChangeHandler = (event, text) => {
    text === "title"
      ? setTitle(event.target.value)
      : setDescription(event.target.value);
  };

  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // only run handle input change in parent after a pause of half a second
      if (title || title === "") {
        handleTextChange(item.id, title, "title");
      }
    }, 500);

    // Cleanup function to cancel timeoutId
    return () => {
      clearTimeout(timeoutId);
    };
  }, [title]);

  // Question: does cleanup function only work in useEffect? b/c if I extract repeated code into new function, timeout doesn't work as expected.
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (description || description === "") {
        handleTextChange(item.id, description, "description");
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [description]);

  return (
    <div className="card">
      <div>
        <div className="card__top">
          <label>
            <Checkbox
              className="checkbox"
              checked={isChecked}
              onChange={() =>
                isChecked === true ? setIsChecked(false) : setIsChecked(true)
              }
            />
          </label>
          <textarea
            className="card__title"
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e) => textChangeHandler(e, "title")}
          />
        </div>
        <textarea
          className="card__description"
          type="text"
          value={description}
          placeholder="Description"
          onChange={(e) => textChangeHandler(e, "description")}
        />
      </div>
      <div className="actions">
        <button onClick={deleteHandler} className="btn btn--main card__btn">
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={confirmDelHandler} />
      )}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
};

export default Todo;
