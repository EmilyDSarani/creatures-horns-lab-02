import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <div>
              <select onChange={this.props.handleKeywordChange}>
              {
            this.props.option.map(option=><option value={option}>{option}</option>)
              }
              </select>
              
            </div>
        )
    }
}


