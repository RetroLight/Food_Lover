import {factsActionTypes} from "./facts.types";

export const updateFactsStart = () => ({
    type: factsActionTypes.FETCH_FACTS_START
})

export const updateFactsSuccess = (factsCollection) => ({
    type: factsActionTypes.FETCH_FACTS_SUCCESS,
    payload: factsCollection
})

export const updateFactsFailure = (errorMessage) => ({
    type: factsActionTypes.FETCH_FACTS_FAILURE,
    error: errorMessage
})
