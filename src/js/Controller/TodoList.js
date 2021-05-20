import React, { useState } from "react";
import ListItem from "../Controller/Listitem";

const ToDoList = () => {
  const [toDoList, setListItem] = useState([]);

  const [item, setItem] = useState("");

  const handleSubmitForm = e => {
    e.preventDefault();
    e.persist();
    setListItem([...toDoList, { name: item, isComplete: false }]);
    setItem("");
  };

  const handeChange = e => {
    e.persist();
    setItem(e.target.value);
  };

  const removeItem = index => {
    const newList = toDoList.filter((item, i) => index !== i);
    setListItem(newList);
  };

  const handleChange = index => {
    const toDos = [...toDoList];
    toDos[index].isComplete = !toDos[index].isComplete;
    setListItem(toDos);
  };

  return (
    <div>
      <h2>TO DO LIST</h2>
      <form onSubmit={handleSubmitForm}>
        <input type="text" name="item" value={item} onChange={handeChange} />
        <input type="submit" value="Submit" />
      </form>
      {toDoList.map((item, index) => {
        return (
          <ListItem
            item={item}
            index={index}
            removeItem={removeItem}
            handleChange={handleChange}
          />
        );
      })}
    </div>
  );
};

export default ToDoList;
