import React, { Component } from 'react';
// import styles from './welcome.css';
import {
    Modal,
    Button,
    Form
} from 'react-bootstrap';
import Firebase from 'firebase';
import Timeline from './Timeline.js';
import { Link, withRouter } from 'react-router-dom';

class Welcome extends React.Component{
    constructor(props) {
        super(props);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleAuth = this.handleAuth.bind(this);
        this.handleChangeEmail =  this.handleChangeEmail.bind(this);
        this.handleChangePassword =  this.handleChangePassword.bind(this);
    
        this.state = {
          show: false,
          email: '',
          password: '',
          redirect: false
        };
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }

      handleChangeEmail(event) {
        this.setState({
            email: event.target.value
        });
      }

      handleChangePassword(event) {
        this.setState({
            password: event.target.value
        });
      }

      handleAuth(){
        const config = {
            apiKey: "AIzaSyB27y1gdYay2HLN0R3YNB_Cu7jl4jWAoRU",
            authDomain: "variosproyectos-35b23.firebaseapp.com",
            databaseURL: "https://variosproyectos-35b23.firebaseio.com",
            projectId: "variosproyectos-35b23",
            storageBucket: "variosproyectos-35b23.appspot.com",
            messagingSenderId: "317508774373"
        };
        Firebase.initializeApp(config);

        Firebase.auth().createUserWithEmailAndPassword((this.state.email), (this.state.password))
        .then(this.props.history.replace('/timeline'))
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
      }
    
    render() {
        return (
            <section>
                <Button variant="primary" onClick={this.handleShow}>
                Registrate
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Registrate</Modal.Title>
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

export default withRouter(Welcome);