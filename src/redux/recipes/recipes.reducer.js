import {recipesActionTypes} from "./recipes.types";

const INITIAL_STATE = {
    recipesData: {},
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
                recipesData: action.payload,
                isFetching: false
            }
        case recipesActionTypes.RECIPES_FETCHING_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.error
            }
        default:
            return state
    }
}

export default recipesReducer;
