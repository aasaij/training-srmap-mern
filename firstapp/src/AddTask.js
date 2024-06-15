import React, { useState } from 'react'
import {FaPlus} from 'react-icons/fa'
import Button from 'react-bootstrap/Button';

const AddTask = ({todoList,setTodoList}) => {

  const [newTask, setNewTask] = useState("")

  const onTextChange = (evt) => {
    const text = evt.target.value
    setNewTask(text)
  }
  const addTask = (text) => {
    const newId = todoList.length !== 0 ? todoList[todoList.length-1].id + 1 : 1;
    const newTaskItem = {id:newId, descr:text,checked:false}
    const newTaskList = [...todoList, newTaskItem]
    localStorage.setItem('todolist', JSON.stringify(newTaskList))
    setTodoList(newTaskList)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    addTask(newTask)
    setNewTask('')
  }

  return (
    <form className="form-group" onSubmit={(evt)=>handleSubmit(evt)}>        
        <div class="input-group mb-3">
          <input type="text" 
            class="form-control" 
            placeholder="Add Task" 
            autoFocus
            required
            value = {newTask}
            onChange={(evt) => onTextChange(evt)}
            />
          <span className="input-group-text">
            <Button type="submit">
              <FaPlus  role = "button" type='Submit'/>
              </Button>
          </span>         
        </div>
    </form>
  )
}

export default AddTask

// https://bit.ly/HH-150624

