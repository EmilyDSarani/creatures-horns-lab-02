import React, { Component } from 'react';
import Header from './components/Header';
import ImageList from './components/ImageList';
import dataCreatures from './data.js';
import Dropdown from './components/Dropdown';
import './App.css'
//will need to import the imagelist over here, this is where I will use that list to map out the items 
//will also do the filter, maps, section, option, handlechange
//e.target.keyword

//Main Idea and goal: This needs to take in the state and keyword. The handleChange will make it so that it specifically targets the keyword.
//It will render out everything and the the filter will take into account "if there is nothing, show all, but if they select the correspoding option in the dropdown, bring up everything with that option"
//the mapping will render the photos, title, etc to the page 
//Am I understanding this right...

export default class App extends Component {

state = {
    keyword: '',
    horns: ''
}

handleKeywordChange = (e) => {
    this.setState({keyword: e.target.value})
}
handleHornsChange = (e) => {
  this.setState(Number({horns: e.target.value}))
}
               
    render(){
        return (
            <div className='creatures'>
                <Header />


                <p>All {this.state.keyword} creatures with {this.state.horns}</p>
                
                <Dropdown handleKeywordChange={this.handleKeywordChange}
                option={['',
                'addax',
                'unicorn',
                'rhino',
                'narwhal',
                'triceratops',
                'markhor',
                'mouflon',
                'chameleon',
                'lizard',
                'dragon']} />
              <Dropdown handleHornsChange={this.handleHornsChange}
                option={['', 1, 2, 3,]} />
               
                {

         dataCreatures
        .filter (creature => {
            if(!this.state.keyword){
                return true
            }
            return creature.keyword === this.state.keyword
        })
        .filter (creature => {
          if(!this.state.horns){
              return true
          }
          return creature.horns === this.state.horns
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
