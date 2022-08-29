import {factsActionTypes} from "./facts.types";

const INITIAL_STATE = {
    factsCollection: [],
    errorMessage: '',
    fetching: false
}

const factsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case factsActionTypes.FETCH_FACTS_START:
            return {
                ...state,
                fetching: true
            }
        case factsActionTypes.FETCH_FACTS_SUCCESS:
            return {
                ...state,
                factsCollection: action.payload,
                fetching: false
            }
        case factsActionTypes.FETCH_FACTS_FAILURE:
            return {
                ...state,
                errorMessage: action.error,
                fetching: false
            }
        default:
            return state
    }
}

export default factsReducer;
