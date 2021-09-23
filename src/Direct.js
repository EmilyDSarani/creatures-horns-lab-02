import React, { Component } from 'react'
import App from './App'
import Home from './Home'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';


export default class Direct extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <Home {...routerProps} />} 
                        />
                        <Route 
                            path="/App" 
                            exact
                            render={(routerProps) => <App {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}