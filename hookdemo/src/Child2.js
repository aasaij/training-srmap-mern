import React, { useContext } from 'react'
import { UserContext } from './App'
const Child2 = () => {
  const user = useContext(UserContext)
  return (
    <div>
      <h1>Welcome {user}</h1>
    </div>
  )
}

export default Child2
