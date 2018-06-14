import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './CocktailDetails.css'

export default function CocktailDetails (props) {
  // static propTypes = {
  //   images:
  // }

  return (
    <div className="cocktail-details">
      { props.details && props.details.map((drink) =>
        <div>
          <h1>{ drink.strDrink }</h1>
          <div>
            <img className = "cocktail-thumb"  src={ drink.strDrinkThumb } alt="Cocktail" />
          </div>
          <div>
            <h2>Ingredients</h2>
            { drink.strIngredient1 !=='' && <h3>{drink.strMeasure1} of {drink.strIngredient1}</h3>}
            { drink.strIngredient2 !=='' && <h3>{drink.strMeasure2} of {drink.strIngredient2}</h3>}
            { drink.strIngredient3 !=='' && <h3>{drink.strMeasure3} of {drink.strIngredient3}</h3>}
            { drink.strIngredient4 !=='' && <h3>{drink.strMeasure4} of {drink.strIngredient4}</h3>}
            { drink.strIngredient5 !=='' && <h3>{drink.strMeasure5} of {drink.strIngredient5}</h3>}
            { drink.strIngredient6 !=='' && <h3>{drink.strMeasure6} of {drink.strIngredient6}</h3>}
            { drink.strIngredient7 !=='' && <h3>{drink.strMeasure7} of {drink.strIngredient7}</h3>}
            { drink.strIngredient8 !=='' && <h3>{drink.strMeasure8} of {drink.strIngredient8}</h3>}
            { drink.strIngredient9 !=='' && <h3>{drink.strMeasure9} of {drink.strIngredient9}</h3>}
            { drink.strIngredient10 !=='' && <h3>{drink.strMeasure10} of {drink.strIngredient10}</h3>}
            { drink.strIngredient11 !=='' && <h3>{drink.strMeasure11} of {drink.strIngredient11}</h3>}
            { drink.strIngredient12 !=='' && <h3>{drink.strMeasure12} of {drink.strIngredient12}</h3>}
            { drink.strIngredient13 !=='' && <h3>{drink.strMeasure13} of {drink.strIngredient13}</h3>}
            { drink.strIngredient14 !=='' && <h3>{drink.strMeasure14} of {drink.strIngredient14}</h3>}
            { drink.strIngredient15 !=='' && <h3>{drink.strMeasure15} of {drink.strIngredient15}</h3>}
<h2>Instructions</h2>
<div className="cocktail-instructions">{drink.strInstructions}</div>
          </div>
        </div>
      ) }
        { !props.details && 'Loading...' }
          <Link to="/">Go back to the index</Link>
    </div>
  )
}
//  <Link to={ "/cocktailimages/undefined"}> back to {drink.strCategory}</Link>

// {props.images}

//This page will show images of the { props.match.params.breed } breed.
// { props.images && props.images.map(url => <img src={ url } alt="Cocktail" />) }
