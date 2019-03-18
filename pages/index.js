import React, {Component} from 'react'

import Form from '../Components/Form'
import Recipes from '../Components/Recipes'

const API_KEY = "bd445cddd5ba728785e1372eb2c156e7";

export default class extends Component {

  state = {
    recipes: []
  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value
    e.preventDefault()
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`)

    const data = await api_call.json()
    this.setState({recipes: data.recipes})
    console.log(this.state.recipes)
  } 

  render() {
      return(
          <>
            <Form getRecipe={this.getRecipe}/>
            <Recipes recipes={this.state.recipes} />
          </>
      )
  }
}