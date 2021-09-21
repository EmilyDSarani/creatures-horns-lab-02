import React, { Component } from 'react';
import Header from './components/Header';
import ImageList from './components/ImageList'
import dataCreatures from './data.js'
import './App.css'
//will need to import the imagelist over here, this is where I will use that list to map out the items 
//will also do the filter, maps, section, option, handlechange
//e.target.keyword



export default class ImageItem extends Component {

state = {
    keyword: ''
}

handleChange = (e) => {
    this.setState({name: e.target.keyword})
}

    render()
  
     {
        const whackCreatures = dataCreatures
        .filter (creature => {
            if(!this.state.keyword){
                return true
            }
            return creature.keyword === this.state.keyword
        })

        return (
            <div className='creatures'>
                <Header />


                <p>show all {this.state.keyword} creatures with horns</p>

                <select onChange = {this.handleChange}>
                    <option value = ''>All Creatures </option>
                    <option value = 'unicorns'>United Unicorn</option>
                    <option value = 'rhino'> Rockin Rhinos</option>
                    <option value = 'narhwals'>Narwhals Cause Commotions</option>
                    <option value = 'triceratops'>TriCERAtops</option>
                    <option value = 'markhor'>Mighty Morphin Markhors</option>
                    <option value = 'mouflon'>I like to Mouflon Mouflon</option>
                    <option value = 'chameleon'>Chamillionaire Chameleons</option>
                    <option value = 'lizard'>Horned Lizard, some call it a toad</option>
                    <option value = 'dragon'>I am Fire. I am Death.</option>
                </select>

                {
                whackCreatures.map(creature => <ImageList
            url = {creature.url}
            title = {creature.title}
            description = {creature.description}
            keyword = {creature.keyword}
            horns = {creature.horns}    
            />)
                }
            </div>
        )
    }
}
