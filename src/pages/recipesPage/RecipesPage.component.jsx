import React from "react";
import {connect} from "react-redux";
import {RecipesContainer, RecipesList} from "./recipesPage.styles";
import {Link, Route} from "react-router-dom";
import {compose} from "redux";

import {updateCurrentRecipe} from "../../redux/recipes/recipes.actions";

import RecipeItem from "../../components/recipe/Recipe.component";
import Spinner from "../../components/spinner/Spinner.component";
import {withRouter} from "react-router";

const RecipesPage = ({addCurrentRecipe, recipesTitle, recipes, isFetching, match, history}) => {
    // console.log(match)
    const onRecipeChoose = (route, itemLabel) => {
        addCurrentRecipe(itemLabel)
        history.push(route)
    }
    return (
        <RecipesContainer>
            <div className='title'>{recipesTitle}</div>
            {
                isFetching ? <Spinner/> :
                    <RecipesList>
                        {
                            recipes.map(item =>
                                <div onClick={() => onRecipeChoose('/recipeDetails', item.recipe.label)}>
                                    <RecipeItem
                                        key={Math.random() * 1000}
                                        recipeTitle={item.recipe.label}
                                        recipeImage={item.recipe.image}
                                        cals={item.recipe.calories}
                                        cuisineType={item.recipe.cuisineType}
                                        cookingTime={item.recipe.totalTime}
                                        ingredientsNum={item.recipe.ingredients.length}
                                    />
                                </div>
                            )
                        }
                    </RecipesList>
            }
        </RecipesContainer>
    )
};

const mapStateToProps = (state) => ({
    recipes: state.recipesRed.recipesData.hits,
    recipesTitle: state.recipesRed.recipesTitle,
    isFetching: state.recipesRed.isFetching
})

const mapDispatchToProps = (dispatch) => ({
    addCurrentRecipe: chosenRecipeLabel => dispatch(updateCurrentRecipe(chosenRecipeLabel))
})

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(RecipesPage)
