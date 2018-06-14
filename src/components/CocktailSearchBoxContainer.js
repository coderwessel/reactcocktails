import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

export default class CocktailSearchBoxContainer extends PureComponent {
  static propTypes = {
    searchCocktail: PropTypes.func.isRequired
  }

  state = {query:''}

  handleSubmit = (event) => {
  event.preventDefault()
  if (this.state.query.length>=2) {
    this.props.searchCocktail(this.state.query)
    this.setState({
      query: ''
    })
    }
    else
     {alert('Search query should have at least two chars')}
}

    handleChange = (event) => {
    this.setState({
      query: event.target.value
    })

  }

  render() {
    return (
      <div className="search-cocktail">
        <form onSubmit = {this.handleSubmit}>
          <label>
            Cocktail Search:
            <input
              type="text"
                        name="query"
                        onChange={this.handleChange}
                        value={this.state.query}
           />
          </label>
          <input type="submit" value="Search" />
        </form>
      </div>
    )
  }
}
