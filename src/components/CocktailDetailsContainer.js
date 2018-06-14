import React, {PureComponent} from 'react';
import CocktailDetails from './CocktailDetails'
import request from 'superagent'

export default class CocktailDetailsContainer extends PureComponent{
  state = { details: null }

  componentDidMount() {
    const id = this.props.match.params.id
    console.log(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php\?i\=${id}`)
    request
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php\?i\=${id}`)
      .then(response => this.updateDetails(response.body.drinks))
      .catch(error => console.log(`I got an error: ${error}`))
  }

  updateDetails(drinks) {
    const details=drinks//.map(item => item.idDrink)
    this.setState({
      details: details
    })
  }

  render() {
    return <CocktailDetails details={ this.state.details } />
  }

}
