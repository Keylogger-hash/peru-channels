import React,{useState} from "react";
import "./style.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {  ButtonGroup, Dropdown, Form } from "react-bootstrap";


export const FeedbackModal = ({show,handleClose}) => {
    const url = 'http://localhost:8000/api/v1/feedback/'
    const [name,setName] = useState("")
    const [email, setEmail] = useState("")
    const [description, setDescription] = useState("")
    const handleSubmit = (e)=>{
      e.preventDefault()

      fetch(url,{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "name": name,
          "email": email,
          "description": description
        })
      }).then(()=>{
        console.log('Feedback added')
        handleClose()
      })
    }
    return (
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Feedback Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control as="input" rows={3} onChange={(e)=>setName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={(e)=>setDescription(e.target.value)}/>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    )
}
