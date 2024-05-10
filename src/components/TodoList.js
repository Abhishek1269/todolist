import React from 'react'

function TodoList(props) {
  return (
    <li className='task-list'>
        {props.item}
        <span className='icons'>
        <i className="fa-solid fa-eraser icon-delete" onClick={e =>{
            props.deleteTask(props.index)
        }}></i>
        </span>
    </li>
  )
}

export default TodoList
