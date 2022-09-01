import {recipesActionTypes} from './recipes.types';

export const updateRecipesStart = (recipeQuery) => ({
    type: recipesActionTypes.RECIPES_FETCHING_START,
    payload: recipeQuery
});

export const updateRecipesSuccess = (recipesArr, query) => ({
    type: recipesActionTypes.RECIPES_FETCHING_SUCCESS,
    payload: {recipesArr, query}
});

export const updateRecipesFailure = (errorMessage) => ({
    type: recipesActionTypes.RECIPES_FETCHING_FAILURE,
    error: errorMessage
});

export const updateCurrentRecipe = (currentRecipe) => ({
    type: recipesActionTypes.ADD_CURRENT_RECIPE,
    payload: currentRecipe
})
