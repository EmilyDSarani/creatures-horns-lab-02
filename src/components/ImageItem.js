import React, { Component } from 'react'
import ImageList from './ImageList.js'
import creatures from '../data.js'
//will need to import the imagelist over here, this is where I will use that list to map out the items 
//will also do the filter, maps, section, option, handlechange
//e.target.keyword
//could I code everything in here and render it over?
export default class ImageItem extends Component {

state {
    keyword '';
}
handleChange = (e) => {
    this.setState({name: e.target.keyword})
}
    render() {
        return (
            <div>
                <p>show all {this.state.keyword} creatures with horns</p>

                <select onChange = {this.handleChange}>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
                creatures
                .filter {creature => creature.keyword === this.state.keyword}
                .map{creature => <ImageList {...creatures}/>}

                
            </div>
        )
    }
}
