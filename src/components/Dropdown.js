import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <div>
                {/* so, continuing from this code in app.js, this is..essentially saying that
                onchange we want it to render our handle event. So as the user selects it will render the correct horns and keywords. 
                the option maps thing is something i wrote down in my notes that Dani mentioned. It is being matched to the option=[array] on the app.js page
                then it is rendering the names and number of keywords/horns respectively and the selection and value are being named that.*/}
              <select onChange={this.props.handleChange}>
              {
            this.props.option.map(option=><option value={option}>{option}</option>)
              }
              </select>
              
            </div>
        )
    }
}


