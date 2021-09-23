import React, { Component } from 'react';
import Header from './components/Header';
import ImageList from './components/ImageList';
import dataCreatures from './data.js';
import Dropdown from './components/Dropdown';
import PTag from './components/PTag';
import {Link } from 'react-router-dom';
import'./Home'
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
//these handle events are making it possible for the user to select the keyword and horn.
//so..the e...is what we are passing through and it is targeting the value so that...when the user selects it is selecting the exact value?
//I am still a bit foggy on it...
handleKeywordChange = (e) => {
    this.setState({keyword: e.target.value})
}
handleHornsChange = (e) => {
  this.setState({horns: Number(e.target.value)})
}
               
    render(){
        return (
            <div className='creatures'>
                <Header />


               <PTag keyword={this.state.keyword}
               horns={this.state.horns}/>
            
            {/* this wonderful beautiful confusing code is...I think a callback? we use the general name of handlechange
            then on the dropdown page it would need to read this.props.handleChange to match it up. This allows it to render both in.*/}
            {/* the options portion, i think...is like putting a value on it. it...will read the different values and have it equal that value?*/}
                <Dropdown handleChange={this.handleKeywordChange}
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
            
              <Dropdown handleChange={this.handleHornsChange}
                option={['', 1, 2, 3, 100]} />
               <ImageList items={dataCreatures}
               keyword={this.state.keyword}
                horns={this.state.horns}/>

            <Link to="/"></Link>
          
            </div> 

        )
    }
}
