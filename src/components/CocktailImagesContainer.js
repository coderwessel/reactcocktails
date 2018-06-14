import React, {PureComponent} from 'react';
import CocktailImages from './CocktailImages'
import request from 'superagent'

export default class CocktailImagesContainer extends PureComponent{
  state = { images: null }

// .replace(" ", "_").replace("\/", "%2F")
  componentDidMount() {
    const category = this.props.match.params.category;
    console.log(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
    request
      .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(response => this.updateImages(response.body.drinks))
      .catch(error => console.log(`I got an error: ${error}`))
  }

  updateImages(drinks) {
    const images=drinks//.map(item => item.idDrink)
    this.setState({
      images: images
    })
  }

  render() {
    return <CocktailImages images={ this.state.images } />
  }

}
