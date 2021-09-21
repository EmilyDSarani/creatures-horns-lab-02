import React, { Component } from 'react'

//I am going to assume I would assume this is where I need to set up the render. like, the whole {this.prop.img} {this.prop.name} {this.prop.information} {this.prop.key} {this.prop.horn} 
export default class ImageList extends Component {
    render() {
        return (
            <div className="images">
            <img className= 'img' src={this.props.url} alt='urls'/>
            {this.props.title} 
            {this.props.description} 
            {this.props.keyword} 
            {this.props.horns} 
            </div>
            
        )
    }
}
