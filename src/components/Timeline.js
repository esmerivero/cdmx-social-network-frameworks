import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {Button} from 'react-bootstrap';

class Timeline extends React.Component{
    constructor(props) {
        super(props);
        console.log(props);
        
    }

    render(){
        return(
            <h1>Hola</h1>
        )
    }
}

export default withRouter(Timeline);