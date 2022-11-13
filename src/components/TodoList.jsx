import React, {useState} from 'react'
import { createContext } from 'react';
import { useDataProvider } from '../providers/Data.provider';
import "../styles/TodoList.css"
export default function TodoList(props) {

  const {list, updateList} = useDataProvider();
  const [todo, setTodo] = useState('');
  const [searchInp, setSearchInp] = useState([]);
  const newElement = () =>{

    if(todo === '') {
      alert('please type something to do');
      return false; 
    }
    return true;
  }
  const submitHandler = (e)=>{
    e.preventDefault();
    if(!newElement()) {
      return; 
    }
    const newTodo = {
      title: todo, 
      complete: false,
    }
    updateList([...list, newTodo]);
  }

  const finishHandler = (index) =>{
   let temp = [...list];
   temp.splice(index , 1 ) ; 
   updateList([temp]);
  };

  return (
    <div className = "TodoList">
    <form className = "header" onSubmit = {submitHandler } >
      <h2>To Do List</h2>
      <input type="text" className = "input" onChange = {(e)=>{setTodo(e.target.value)}} id="toDoInput" placeholder = "Title..." />
      <input type = "submit" className = "addBtn" value = "Add"/>    
    </form>
  
     <ul className = "TodoUL">
      {/* shows the list. works with providers and map loop. */}

        {list.map((item)=>{ 
          return <li className = "checked">{item.title }</li>
          })}
          {/* Deletes the elements from the todo list. */}
          <button onClick = {finishHandler} className = "removeBtn">Finish All</button> <br /> <br /> <br />

</ul>
    </div>
  )
}
