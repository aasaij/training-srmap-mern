import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'

const Employees = () => {
//   const employee = {name:"Vamsi", gender:"Male", salary:1000000}
  const [employee, setEmployee] = useState([])
  useEffect(
    ()=>{
        axios.get("http://localhost:9000")
        .then(result => {
            console.log(result.data)
            setEmployee(result.data)
        })
        .catch(err => console.log(err))
    }, 
    [])
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
      <Link to={'/create'} className='btn btn-success' >Add +</Link>
      <table className='table'>
        <thead>
            <tr>
                <th>Name</th> <th>Gender</th> <th>Salary</th><th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                employee.map(
                    (row) => 
                    <tr key={row._id}>
                        <td>{row.name}</td>
                        <td>{row.gender}</td>
                        <td>{row.salary}</td>                
                        <Link to={'/update'} className='btn btn-success' > Update </Link>
                        <button className="btn btn-danger">Delete</button>
                    </tr>
                )                
            }
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Employees
