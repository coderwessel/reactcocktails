import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import CocktailCategoriesContainer from './components/CocktailCategoriesContainer';
import CocktailImagesContainer from './components/CocktailImagesContainer';
import CocktailDetailsContainer from './components/CocktailDetailsContainer';
import CocktailSearchBoxContainer from './components/CocktailSearchBoxContainer';
import CocktailSearchContainer from './components/CocktailSearchContainer';

class App extends Component {

  search = (q) => {
      console.log (q)
      window.location.href = `/search/${q}`                                                                        ;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to my Cocktails</h1>
          <CocktailSearchBoxContainer searchCocktail={this.search}/>
        </header>

        <main>
          <Route exact path="/" component={CocktailCategoriesContainer} />
          <Route path="/cocktailimages/:category" component={CocktailImagesContainer} />
          <Route path="/cocktaildetails/:id" component={CocktailDetailsContainer} />
          <Route path="/search/:q" component={CocktailSearchContainer} />

        </main>

      </div>
    );
  }
}
// <Route path="/search/:q" component={CocktailSearchContainer} />

export default App;
