import React, { useState } from 'react'
import "./App.css"
import TODOform from './components/TODOform'
import TodoList from './components/TodoList';

function App() {
  const [listTo, setlistTo] = useState([]);
  let addTask = (inputText) => {
    if(inputText !== ''){
      setlistTo([...listTo, inputText]);
    }
  }

  const deleteTask = (key) =>{
    let newListTo = [...listTo];
    newListTo.splice(key, 1);
    setlistTo([...newListTo])
  }
  return (
    <div className='main'>
      <div className='center'>
        <TODOform addTask ={addTask}/>
        <h1 className='heading'>TODO</h1>
        <hr/>
        {listTo.map((listItem, i) =>{
          return(
            <TodoList key ={i} index ={i} item = {listItem}  deleteTask = {deleteTask}/>
          )
        })}
      </div>
    </div>
  )
}

export default App
