import React, { Component } from 'react';
import styles from './welcome.css';
import {
    Modal,
    Button,
    Form
} from 'react-bootstrap';

class Welcome extends React.Component{
    constructor(props) {
        super(props);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false,
        };
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }

      handleAuth(){
          console.log('voy a guardar correo y contrseña');
          
      }
    
    render() {
        return (
            <section>
                <Button variant="primary" onClick={this.handleShow}>
                Inicia Sesión
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Inicio de sesión</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control type="email" value={this.state.email} onChange={this.handleChangeEmail} placeholder="correo@ejemplo.com" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" value={this.state.password} onChange={this.handleChangePassword} placeholder="Contraseña" />
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                    Cerrar
                    </Button>
                    <Button variant="primary" type="submit" onClick={this.handleAuth}>
                    Entrar
                    </Button>
                </Modal.Footer>
                </Modal>
            </section>
        );
    }
}

export default Welcome;