import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {Form, Button, ButtonToolbar} from 'react-bootstrap';
import Firebase from 'firebase';

class Timeline extends React.Component{
    constructor(props) {
        super(props);
        console.log(props);

        this.handlePost = this.handlePost.bind(this);  
        this.handleSignOut = this.handleSignOut.bind(this);
        this.handlePost = this.handlePost.bind(this);
        this.handleChangePost = this.handleChangePost.bind(this);

        this.state = {
            post: ''
        }
    }

    handleChangePost(event) {
        this.setState({ post: event.target.value})
    }

    handleSignOut(){
        Firebase.auth().signOut()
        .then(this.props.history.replace('/home'))
        .catch(function(error) {
            // An error happened.
          });
    }

    handlePost(){    
        Firebase.firestore().collection("post").add({
            post: this.state.post
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });    
    }

    render(){
        return (
            <div className="Form">

                <ButtonToolbar>
                    <Button bsSize="large" onClick={this.handleSignOut}>Cerrar sesión</Button>
                </ButtonToolbar>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Comentario</Form.Label>
                    <Form.Control type="text" value={this.state.post} onChange={this.handleChangePost} placeholder="Escribe algo aquí" />
                    <Form.Text className="text-muted">
                    Agrega alguna duda o comparte un momento especial de tu perrit@
                    </Form.Text>

                    <Button variant="primary" type="submit" onClick={this.handlePost}>
                    Compartir
                    </Button>
                    {/* <Button bsSize="large">Agregar comentario</Button> */}
                </Form.Group>
            </div>
        );
    }
}

export default withRouter(Timeline);