import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CocktailCategoriesContainer from './components/CocktailCategoriesContainer';
import CocktailImagesContainer from './components/CocktailImagesContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to my Cocktails</h1>
        </header>
        <main>
          <Route exact path="/" component={CocktailCategoriesContainer} />
          <Route path="/cocktailimages/:category" component={CocktailImagesContainer} />
        </main>
      </div>
    );
  }
}

export default App;
