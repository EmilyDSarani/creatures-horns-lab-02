import React, { Component } from 'react'
import ImagesRender from './ImagesRender.js'

//Updated- so what this page is doing is that it is taking in the ~this.props~ and filtering the keywords and horns for the user to select on a different page
// at the bottom I am plugging in the imagesrender from a diff page to render it in here to map the props.items through in order to get the images
//make sure to match the this.props.items on this page to the 'items={dataCreatures}' on the app.js page
export default class ImageList extends Component {
    render() {
        return (
            <div>

               {
    this.props.items
    .filter (creature => {
   if(!this.props.keyword){
       return true
   }
   return creature.keyword === this.props.keyword
    })
    .filter (creature => {
    if(!this.props.horns){
     return true
    }
    return creature.horns === this.props.horns
    })
    .map(creature => <ImagesRender
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
