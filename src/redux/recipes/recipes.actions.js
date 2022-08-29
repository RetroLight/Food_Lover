import {recipesActionTypes} from './recipes.types';

export const updateRecipesStart = (recipeQuery) => ({
    type: recipesActionTypes.RECIPES_FETCHING_START,
    payload: recipeQuery
});

export const updateRecipesSuccess = (recipesArr) => ({
    type: recipesActionTypes.RECIPES_FETCHING_SUCCESS,
    payload: recipesArr
});

export const updateRecipesFailure = (errorMessage) => ({
    type: recipesActionTypes.RECIPES_FETCHING_FAILURE,
    error: errorMessage
});
