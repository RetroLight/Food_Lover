import React from 'react';
import './App.css';
import {useEffect} from "react";
import {Switch, Route} from 'react-router-dom';
import WebFont from 'webfontloader';

import HomePage from "./pages/homePage/HomePage.component";
import RecipesPage from "./pages/recipesPage/RecipesPage.component";
import RecipeDetailsPage from "./pages/recipeDetailsPage/RecipeDetailsPage";

function App() {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Droid Sans', 'Chilanka']
            }
        });
    }, []);

    return (
    <div className="App">
      <header className="App-header">
          <div>Food Lover</div>
      </header>
        <div className='appContainer'>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/recipes' component={RecipesPage}/>
                <Route exact path='/recipeDetails' component={RecipeDetailsPage}/>
            </Switch>
        </div>
    </div>
  );
}

export default App;
