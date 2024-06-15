import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from "./AddTask";
const Content = (props) => {
    const [todoList,setTodoList] = useState (
        JSON.parse(localStorage.getItem('todolist'))
    )
    const handleChange = (id) => {
            const newTodoList = todoList.map((row)=> 
                row.id === id ? {...row, checked:!row.checked}:row
            )
        setTodoList(newTodoList);
        localStorage.setItem('todolist', JSON.stringify(newTodoList))
    }
    const handleDelete = (id) => {
        const newTodoList = todoList.filter(
            (row) => row.id !== id
        )
        setTodoList(newTodoList);
        localStorage.setItem('todolist', JSON.stringify(newTodoList))
    }
    return (
        <main className="container-flex">
            <AddTask 
                todoList = {todoList}
                setTodoList = {setTodoList}
            />
            <ul className="list-group">
                {todoList.length !== 0?
                todoList.map(
                    (item) => 
                        <li key={item.id} 
                            className="list-group-item" >
                            <input type="checkbox" name="" id="" 
                                onChange={() => handleChange(item.id)}
                                className = "me-2 form-check-input"
                                checked = {item.checked}
                            />
                            <label className="col-11">
                                {item.descr}
                            </label>
                            <FaTrashAlt 
                                role="button"
                                onClick={() => {handleDelete(item.id)}}
                            />
                        </li>
                   ):
                   <p>You are free now...!</p>           
                }
            </ul>
        </main>
    )

}
export default Content;



// https://bit.ly/UU-140624

