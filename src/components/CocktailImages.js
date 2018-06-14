import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './CocktailImages.css'

export default function CocktailImages (props) {
  // static propTypes = {
  //   images:
  // }
  return (
    <div className="cocktail-images">
      <h1>Cocktail Images</h1>
      { props.images && props.images.map((drink) =>
        <div>
        <div>
            <Link to={ `/cocktaildetails/${drink.idDrink}` }>{drink.strDrink}</Link>
        </div>
        <div>
          <img className = "cocktail-thumb"  src={ drink.strDrinkThumb } alt="Cocktail" />
        </div>
        </div>
      ) }
        { !props.images && 'Loading...' }
      <Link to="/">Go back to the index</Link>
    </div>
  )
}
// {props.images}

//This page will show images of the { props.match.params.breed } breed.
// { props.images && props.images.map(url => <img src={ url } alt="Cocktail" />) }
