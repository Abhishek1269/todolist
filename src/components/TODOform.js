import React, { useState } from 'react'

function TODOform(props) {
    const [inputText, setInputText] = useState('');
  return (
    <div className='input'>
      <input 
      type="text" 
      className='input-form' 
      placeholder='Enter the task'
      value={inputText}
      onChange={e =>{
        setInputText(e.target.value)
      }}
      />
      <button className='add-btn' onClick={() =>{
        props.addTask(inputText)
        setInputText("")
      }}>Add Task</button>
    </div>
  )
}

export default TODOform
