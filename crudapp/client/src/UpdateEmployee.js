import React from 'react'

const UpdateEmployee = () => {
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form>
        <h1>Update Employee</h1>
            <div class="mb-3">
                <label for="employeeName" class="form-label">Employee Name</label>
                <input type="text" class="form-control" id="employeeName" 
                placeholder="Enter your name"/>
            </div>
            <div class="mb-3">
                <div class="form-check">
                    <input class="form-check-input" 
                    type="radio" 
                    name="gender" id="male"/>
                    <label class="form-check-label" for="male">Male</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" 
                    type="radio" 
                    name="gender" id="female"/>
                    <label class="form-check-label" for="female">Female</label>
                </div>
            </div>
            <div class="mb-3">
                <label for="salary" class="form-label">Salary</label>
                <input type="text" class="form-control" id="salary" 
                placeholder="Enter your salary"/>
            </div>
            <button className='btn btn-primary'>Update</button>
        </form>
    </div>
    </div>
  )
}

export default UpdateEmployee
