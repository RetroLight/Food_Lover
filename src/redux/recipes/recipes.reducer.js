import {recipesActionTypes} from "./recipes.types";

const INITIAL_STATE = {
    recipesTitle: '',
    recipesData: {},
    currentRecipe: {},
    recentRecipes: [],
    isFetching: false,
    errorMessage: ''
}

const recipesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case recipesActionTypes.RECIPES_FETCHING_START:
            return {
                ...state,
                isFetching: true
            }
        case recipesActionTypes.RECIPES_FETCHING_SUCCESS:
            return {
                ...state,
                recipesTitle: action.payload.query,
                recipesData: action.payload.recipesArr,
                isFetching: false
            }
        case recipesActionTypes.RECIPES_FETCHING_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.error
            }
        case recipesActionTypes.ADD_CURRENT_RECIPE:
            return {
                ...state,
                currentRecipe: {...state.recipesData.hits.find(item => item.recipe.label === action.payload)},
                recentRecipes: [...state.recentRecipes, {...state.recipesData.hits.find(item => item.recipe.label === action.payload)}]
            }
        default:
            return state
    }
}

export default recipesReducer;
