import React, {PureComponent} from 'react';
import CocktailImages from './CocktailImages'
import request from 'superagent'

export default class CocktailSearchContainer extends PureComponent{
  state = { images: null,
  query:'' }

  updateSearch (query) {
  console.log(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
  request
    .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
    .then(   (response) => {console.log(response.body.drinks)
            this.updateImages(response.body.drinks)})
    .catch(error => console.log(`I got an error: ${error}`))
  }

  componentDidMount() {
    // this.props.onRef(this)
    const query = this.props.match.params.q
    this.updateSearch (query)
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
