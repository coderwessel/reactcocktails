
import React, {PureComponent} from 'react'
import request from 'superagent'
import CocktailCategories from './CocktailCategories'

export default class CocktailCategoriesContainer extends PureComponent {
  state = { cocktailCategories: null }

  componentDidMount() {
    console.log('I want a respoonse..')

    request
      .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      // .get('https://dog.ceo/api/breeds/list/all')
      // .get('https://www.blablablablabl.bla')
      .then(response => {
        const cocktailCategories = response.body.drinks.map(drink => drink.strCategory)
        console.log('I got a response')
        console.log(response.body.drinks.map(drink => drink.strCategory))
        this.updateCocktails(cocktailCategories)
      })
      .catch(err => {
        console.log('I got an error ... '+JSON.stringify(err))
        // console.error
      })
  }

  updateCocktails(cocktailCategories) {
    this.setState({
      cocktailCategories: cocktailCategories
    })
  }
  render() {
    return <CocktailCategories cocktailCategoriesList={this.state.cocktailCategories} />
  }
}
