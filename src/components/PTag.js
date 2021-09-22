import React, { Component } from 'react'

export default class PTag extends Component {
    render() {
        return (
   
                <p>
                    All {this.props.keyword} creatures with {this.props.horns} horns
                </p>
        
        )
    }
}
