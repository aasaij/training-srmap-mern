import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useNavigate} from 'react-router-dom'

const UpdateEmployee = () => {
  const {id} = useParams()
  const [name,setName] = useState("")
  const [gender, setGender] = useState("")
  const [salary, setSalary] = useState("")
  
  useEffect(
    () => {
          axios
          .get("http://localhost:9000/getEmployee/"+id)  
          .then(
            result => {
                setName(result.data.name)
                setGender(result.data.gender)
                setSalary(result.data.salary)
            }
          )
          .catch(err => console.log(err))
    },    
    
    [])
  const navigate = useNavigate()    
  const handleSubmit = (e) => {
    e.preventDefault()
    axios
    .put("http://localhost:9000/updateEmployee/"+id,
            {name, gender, salary})
    .then( result => {
        console.log(result)
        navigate("/")
        }
    )
    .catch(err => console.log(err))
  }
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
        <h1>Update Employee</h1>
            <div className="mb-3">
                <label for="employeeName" class="form-label">Employee Name</label>
                <input type="text" class="form-control" id="employeeName" 
                placeholder="Enter your name"
                value = {name}
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div class="mb-3">
                <div class="form-check">
                    <input class="form-check-input" 
                    type="radio" 
                    name="gender" id="male"
                    checked = {gender==="M"?true:false}
                    onClick={()=>setGender("M")}
                    />
                    <label class="form-check-label" for="male">Male</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" 
                    type="radio" 
                    name="gender" id="female"
                    checked = {gender==="F"?true:false}
                    onClick={()=>setGender("F")}
                    />
                    <label class="form-check-label" for="female">Female</label>
                </div>
            </div>
            <div class="mb-3">
                <label for="salary" class="form-label">Salary</label>
                <input type="text" class="form-control" id="salary" 
                placeholder="Enter your salary"
                value = {salary}
                onChange={(e) => setSalary(e.target.value)}                
                
                />
            </div>
            <button className='btn btn-primary'>Update</button>
        </form>
    </div>
    </div>
  )
}

export default UpdateEmployee
