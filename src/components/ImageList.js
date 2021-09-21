import React, { Component } from 'react'
//I am going to assume I would assume this is where I need to set up the render. like, the whole {this.prop.img} {this.prop.name} {this.prop.information} {this.prop.key} {this.prop.horn} 
export default class ImageList extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        {this.props.img}
                        A {this.prop.name} 
                        {this.prop.information} 
                        {this.prop.key} 
                        it has {this.prop.horn} 

                    </li>
                </ul>
            </div>
        )
    }
}
