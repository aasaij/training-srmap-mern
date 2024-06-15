import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const Footer = () => {
  const today = new Date();
  return (
    <footer className='container-fluid rounded'>
        <p>
            Copyright &copy; {today.getFullYear()} Reserved - CCC
        </p>
    </footer>
  )
}

export default Footer
