import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import Form from 'react-bootstrap/Form';


function Addmovie({movies, setmovies}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newmovie, setnewmovie] = useState({
        name:"",
        posterurl:"",
        description:"",
        rating:""

})
const handleadd=()=>{
    setmovies([...movies, newmovie])
 }
  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{backgroundColor:"red", border:"red"}}>
        +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Movie name </Form.Label>
        <Form.Control type="text" placeholder="Enter movie name" onChange={(e)=>setnewmovie({...newmovie, name:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Movie posterurl </Form.Label>
        <Form.Control type="text" placeholder="Enter movie posterurl" onChange={(e)=>setnewmovie({...newmovie, posterurl:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Movie description </Form.Label>
        <Form.Control type="text" placeholder="Enter movie description" onChange={(e)=>setnewmovie({...newmovie, description:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Movie rating </Form.Label>
        <Form.Control type="text" placeholder="Enter movie rating" onChange={(e)=>setnewmovie({...newmovie, rating:e.target.value})} />
      </Form.Group>
   
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleadd(); handleClose(); alert("Done")}} style={{backgroundColor:"red", border:"red"}}>
          Add 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Addmovie
