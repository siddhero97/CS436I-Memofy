import React from 'react';
import {FaHome,FaInfoCircle,FaPlusCircle,FaMinusCircle} from 'react-icons/fa';
// import './NavigationBar.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import logo from "./images/logo.jpg"
export default function NavigationBar() {
  return (
      <h1>Hello</h1>
      // <div className='navbar'>
      //     <Navbar bg="primary" variant="dark" sticky="top">
      //         {/*<Navbar.Brand href="#home">Navbar</Navbar.Brand>*/}
      //         <Nav className="mr-auto">
      //             <Navbar.Brand href="#"><img
      //                 src={logo}
      //                 width="30"
      //                 height="30"
      //                 className="d-inline-block align-top"
      //                 alt="Picture For Memofy logo: 2 fridges overalpping"
      //             />Memofy</Navbar.Brand>
      //             <Navbar.Brand href="#home"><Button variant="outline-light"><FaHome/>Home</Button></Navbar.Brand>
      //             <Navbar.Brand href="#Your Fridge">Your Fridge</Navbar.Brand>
      //         </Nav>
      //         <Form inline>
      //             <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      //             <Button variant="outline-light"><FaInfoCircle/>Search</Button>
      //             <Button variant="success"><FaPlusCircle/>Add</Button>
      //             <Button variant="warning"><FaMinusCircle/>Remove</Button>
      //         </Form>
      //     </Navbar>
      // </div>
  );
}
