import React, { useState } from "react";
import ListItems from "./ListItems";

function TodoList() {
  const [inputList, setInputList] = useState("");
  const [item, setItem] = useState([]);

  const onChangeEvent = (e) => {
    let value = e.target.value;
    console.log(value);

    setInputList(value);
  };

  const removeItem = (id) => {
    console.log("clicked");

    setItem((oldItems) => {
      return oldItems.filter((arrItem, index) => {
        return index !== id;
      })
    })
  };

  const listOfItems = () => {
    setItem((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  return (
    <>
      <div className="bg">
        <div className="todo-div">
          <h1 className="todo-heading"> ToDo List </h1>
          <input
            className="input-box"
            type="text"
            placeholder="Add items here"
            onChange={onChangeEvent}
            value={inputList}
          />
          <button onClick={listOfItems} className="icon-btn">
            <i class="fa-solid fa-circle-plus add-icon"></i>
          </button>

          <ol className="todo-ol">
            {item.map((itemVal, index) => {
              return (
                <ListItems
                  itemVal={itemVal}
                  id={index}
                  index={index}
                  onSelect={removeItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default TodoList;
