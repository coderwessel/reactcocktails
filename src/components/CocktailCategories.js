import React, {PureComponent} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './CocktailCategories.css'

export default class CocktailCategories extends PureComponent {
  // state = { cocktailCategories: null }
  renderCocktailCategory (cocktailCategory) {
    const prettyCategory = cocktailCategory.replace(/ /g , "_").replace(/\//g, "%2F")
    return    (
      <li key={prettyCategory}>
<Link to={ `/cocktailimages/${prettyCategory}` }>{cocktailCategory}</Link>
</li>
        )
  }

  render(){
    const { cocktailCategoriesList } = this.props
    !cocktailCategoriesList && console.log('loading..')
    cocktailCategoriesList && console.log('loaded\n'+cocktailCategoriesList)
    return (
      <div className="CocktailCategories">
        <h1>Cocktail Categories</h1>

        { !cocktailCategoriesList && 'Loading...' }
        {cocktailCategoriesList &&
            <ul className = 'cocktail-categories-list'>
            {cocktailCategoriesList.map (this.renderCocktailCategory)}
          </ul>}


      </div>
    )
    }

}
//
//
//   {cocktailCategoriesList &&
// {!cocktailCategoriesList && 'loading...'}
//     <ul>
//     cocktailCategoriesList.map (this.renderCoctailCategory)
//   </ul>}
// {cocktailCategoriesList===undefined && 'something went wrong...'}
