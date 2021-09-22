import React, { Component } from 'react'
//this page is rendering in the props of each of the titles so that we can grab them in imagelists to map through it for the code to render and read the different parts. 
//idk if render is the right word, whoever reads this please let me know if there is a better way to explain what this code is doing?
export default class ImagesRender extends Component {
    render() {
        return (
            <div className="images">
            <img className= 'img' src={this.props.url} alt='urls'/> <br/>
            The Almighty {this.props.title} <br/>
            Fun Fact: {this.props.description} <br/>
            Species: {this.props.keyword} <br/>
            Horns: {this.props.horns} <br/>
            </div>
        )
    }
}
