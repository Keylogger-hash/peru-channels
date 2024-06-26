import React, {useState} from "react";
import "./style.css";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {  ButtonGroup, Dropdown, Form,Tabs, Tab, Container,Row,Col } from "react-bootstrap";
import {handleLogin, handleRegister,handleLogOut} from './Utils.jsx'

export const AuthComponent = ({show,handleClose}) => {
    const [active, setActive] = useState(true)
    const [loginUsername, setLoginUsername] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [registerUsername, setRegisterUsername] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [registerEmail, setRegisterEmail] = useState("")
    const handleSwitch = ()=>setActive(!active)
    return (
     <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header-container">
            <Container fluid > 
                <Row className="mb-3 col-gap">
                    <Col className={`tabmodal ${active?'active':''}`} onClick={handleSwitch}>
                      <div >
                        Login
                      </div>
                    </Col>
                    <Col className={`tabmodal ${active?'':'active'}`} onClick={handleSwitch}>
                      Register
                    </Col>
                </Row>
            </Container>
        </Modal.Header>
        <Modal.Body>
          { 
            active?
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>username</Form.Label>
                <Form.Control type="input" onChange={(e)=>{setLoginUsername(e.target.value)}}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>passsword</Form.Label>
                <Form.Control type="password" onChange={(e)=>{setLoginPassword(e.target.value)}}/>
              </Form.Group>
            </Form>
            :
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>username</Form.Label>
                <Form.Control type="input" onChange={(e)=>{setRegisterUsername(e.target.value)}}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>email</Form.Label>
                <Form.Control type="email" onChange={(e)=>{setRegisterEmail(e.target.value)}}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>passsword</Form.Label>
                <Form.Control type="password" onChange={(e)=>{setRegisterPassword(e.target.value)}}/>
              </Form.Group>
            </Form>
          }

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {
            active?
            <Button onClick={()=>handleLogin(loginUsername,loginPassword)}>Login</Button>
            :
            <Button onClick={()=>handleRegister(registerUsername,registerPassword,registerEmail)}>Register</Button>
          }
          {/* {
            active?
            <div style={{columnGap:"40px","display":"flex",flexDirection:"row"}}>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Login
              </Button>
            </div>:
            <div style={{columnGap:"40px","display":"flex",flexDirection:"row"}}>

            </div>
          } */}
        </Modal.Footer>
      </Modal>
    )
}
