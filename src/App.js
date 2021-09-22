import React, { Component } from 'react';
import Header from './components/Header';
import ImageList from './components/ImageList'
import dataCreatures from './data.js'
import './App.css'
//will need to import the imagelist over here, this is where I will use that list to map out the items 
//will also do the filter, maps, section, option, handlechange
//e.target.keyword

//Main Idea and goal: This needs to take in the state and keyword. The handleChange will make it so that it specifically targets the keyword.
//It will render out everything and the the filter will take into account "if there is nothing, show all, but if they select the correspoding option in the dropdown, bring up everything with that option"
//the mapping will render the photos, title, etc to the page 
//Am I understanding this right...

export default class ImageItem extends Component {

state = {
    keyword: ''
}

handleChange = (e) => {
    this.setState({keyword: e.target.value})
}

               
    render(){
        return (
            <div className='creatures'>
                <Header />


                <p>All {this.state.keyword} creatures with horns</p>
                
                <select  onChange = {this.handleChange}>
                    <option value = ''>All Creatures </option>
                    <option value = 'addax'> Gotta add in Addax </option>
                    <option value = 'unicorn'>United Unicorn</option>
                    <option value = 'rhino'> Rockin Rhinos</option>
                    <option value = 'narwhal'>Narwhals Cause Commotions</option>
                    <option value = 'triceratops'>TriCERAtops</option>
                    <option value = 'markhor'>Mighty Morphin Markhors</option>
                    <option value = 'mouflon'>I like to Mouflon Mouflon</option>
                    <option value = 'chameleon'>Chamillionaire Chameleons</option>
                    <option value = 'lizard'>Horned Lizard, some call it a toad</option>
                    <option value = 'dragon'>I am Fire. I am Death.</option>
                </select>
                {
         dataCreatures
        .filter (creature => {
            if(!this.state.keyword){
                return true
            }
            return creature.keyword === this.state.keyword
        })
                
        .map(creature => <ImageList
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
