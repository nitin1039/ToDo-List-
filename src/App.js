import React, { useState } from "react";
import todo from "./todolist.png";
import "./App.css";
import TaskList from "./TaskList";

const App = () => {
  const [task, setTask] = useState("");
  // const [list, setList] = useState(['Learn JS']);
  const [list, setList] = useState([{
    id: Date.now(),
    value: 'Learn CS',
    isDone: false
  }]);
const addHandler=()=>{
  const newItem={
    id:Date.now() ,
    value: task,
    isDone: false
  } 
  let newList=[...list]
  newList.push(newItem);
  setList(newList)
  setTask(" ")
}
const onDelete=(id)=>{
   const list1=[...list]
   const updateList=list1.filter(item=>item.id!==id)
   setList(updateList)
}
  return (
    <div>
      <img src={todo} width={200} height={200} className="logo" alt="Error_image_loading"/>
      <h1 className="app-title">React ToDo List</h1>
      <div className="container">
        Add an Item...
        <br />
        <input
          type="text"
          className="input-text"
          placeholder="Enter your Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="add-btn" onClick={addHandler}>Add Item</button>
        <div className="list">
          <ul>
            {list.map((li) => (
              <TaskList taskName={li.value} key={li.id} id={li.id} deleteHandler={onDelete}/>
            ))}
            {/* <TaskList taskName="learn js"/> */}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default App;

