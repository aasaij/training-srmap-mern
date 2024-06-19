import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const CreateEmployee = () => {
    const [name, setName] = useState("")
    const [salary, setSalary] = useState("")
    const [gender, setGender] = useState("")
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:9000/createEmployee", {name, gender, salary})
        .then(result => 
            console.log(result),
            navigate("/")            
        )
        .catch(err => console.log(err))
        
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className="w-50 bg-white rounded p-3">       
        <form onSubmit={handleSubmit}>
        <h1>New Employee</h1>
            <div class="mb-3">
                <label for="employeeName" class="form-label">Employee Name</label>
                <input type="text" class="form-control" id="employeeName" 
                onChange={(e)=>setName(e.target.value)}
                placeholder="Enter your name"/>
            </div>
            <div class="mb-3">
                <div class="form-check">
                    <input class="form-check-input" 
                    type="radio" 
                    name="gender"
                    onClick={()=>setGender("M")}
                    id="male"/>
                    <label class="form-check-label" for="male">Male</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" 
                    type="radio" 
                    name="gender" 
                    onClick={()=>setGender("F")}
                    id="female"/>
                    <label class="form-check-label" for="female">Female</label>
                </div>
            </div>
            <div class="mb-3">
                <label for="salary" class="form-label">Salary</label>
                <input type="text" class="form-control" id="salary" 
                onChange={(e)=>setSalary(e.target.value)}
                placeholder="Enter your salary"/>
            </div>
            <button className='btn btn-primary'>Submit</button>
        </form>
    </div>
    </div>
  )
}

export default CreateEmployee
