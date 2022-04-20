import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



import * as ReactBootStrap from "react-bootstrap";
const Navbar = () => {
  return (
    
    <ReactBootStrap.Navbar bg="dark" variant="dark">
    <ReactBootStrap.Container>

    
    <ReactBootStrap.NavLink href="/dashboard">Library</ReactBootStrap.NavLink>

    <div>
    <ReactBootStrap.Nav className="me-auto">
      <ReactBootStrap.Nav.Link href="/dashboard">Home</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="/dashboard">Profile</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="/login">Logout</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
    </div>
    </ReactBootStrap.Container>
  </ReactBootStrap.Navbar>

  )
}

export default Navbar