import React, { Component } from 'react'
//in this page, it is just an easy...callback? is that the word here?
//you are taking the state on the app.js page then setting this to a prop so that as state changes the words/numbers will appear?
export default class PTag extends Component {
    render() {
        return (
   
                <p>
                    All {this.props.keyword} creatures with {this.props.horns} horns
                </p>
        
        )
    }
}
