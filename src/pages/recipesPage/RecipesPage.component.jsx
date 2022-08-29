import React from "react";
import {connect} from "react-redux";
import {RecipesContainer, RecipesList} from "./recipesPage.styles";
import {Link} from "react-router-dom";

import RecipeItem from "../../components/recipe/Recipe.component";
import Spinner from "../../components/spinner/Spinner.component";

const RecipesPage = ({recipes, isFetching}) => {
    return (
        <RecipesContainer>
            <div className='title'>Recipes</div>
            {
                isFetching ? <Spinner/> :
                    <RecipesList>
                        {
                            recipes.map(item => <Link to='recipeDetails'>
                                    <RecipeItem
                                        recipeTitle={item.recipe.label}
                                        recipeImage={item.recipe.image}
                                        cals={item.recipe.calories}
                                        cuisineType={item.recipe.cuisineType}
                                        cookingTime={item.recipe.totalTime}
                                        ingredientsNum={item.recipe.ingredients.length}
                                    />
                                </Link>
                            )
                        }
                    </RecipesList>
            }
        </RecipesContainer>
    )
};

const mapStateToProps = (state) => ({
    recipes: state.recipesRed.recipesData.hits,
    isFetching: state.recipesRed.isFetching
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(RecipesPage);
