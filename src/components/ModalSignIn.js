import React, { Component } from 'react';
// import styles from './welcome.css';
import {
    Modal,
    Button,
    Form,
    FormGroup,
    Label,
    FormControl
} from 'react-bootstrap';
import Firebase from 'firebase';
// import Timeline from './Timeline.js';
import { Link, withRouter } from 'react-router-dom';

class Welcome extends React.Component{
    constructor(props) {
        super(props);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleAuth = this.handleAuth.bind(this);
        this.handleChangeEmail =  this.handleChangeEmail.bind(this);
        this.handleChangePassword =  this.handleChangePassword.bind(this);
        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleChangeNameDog = this.handleChangeNameDog.bind(this);
        this.handleChangeAgeDog = this.handleChangeAgeDog.bind(this);
    
        this.state = {
          show: false,
          email: '',
          password: '',
          user : '',
          nameDog: '',
          ageDog: '', 
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

      handleChangeUser(event) {
        this.setState({
            user: event.target.value
        });
      }

      handleChangeNameDog(event) {
        this.setState({
            nameDog: event.target.value
        });
      }

      handleChangeAgeDog(event) {
        this.setState({
            ageDog: event.target.value
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
        .then(
            Firebase.firestore().collection("doggoBook").add({
                ageDog: this.state.ageDog,
                dogBreed: 'No definido',
                dogName: this.state.nameDog,
                email: this.state.email,
                genderDog: 'Macho',
                userName: this.state.user
            })
        )
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
                        <Form.Control type="password" value={this.state.password} onChange={this.handleChangePassword} placeholder="Contraseña123" />
                    </Form.Group>

                    <FormGroup>
                        <Form.Label>Usuario</Form.Label>
                        <FormControl type="text" value={this.state.user} onChange={this.handleChangeUser} placeholder="esme_rivero" />
                    </FormGroup>

                    <FormGroup>
                        <Form.Label>Nombre de tu perrit@</Form.Label>
                        <FormControl type="text" value={this.state.nameDog} onChange={this.handleChangeNameDog} placeholder="Zeus" />
                    </FormGroup>

                    <FormGroup>
                        <Form.Label>Edad de tu perrit@</Form.Label>
                        <FormControl type="number" value={this.state.ageDog} onChange={this.handleChangeAgeDog} placeholder="3" />
                    </FormGroup>  

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