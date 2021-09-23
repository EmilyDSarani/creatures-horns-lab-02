import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import './App'

export default class Home extends Component {
    render() {
        return (
            <div>
                
               <Link to="/App">
                   <h1>These Creatues with Horns</h1>
                   <h2> </h2>
                </Link>
                   
            </div>
        )
    }
}
