import {combineReducers} from "redux";
import factsReducer from "./facts/facts.reducer";
import recipesReducer from "./recipes/recipes.reducer";

const rootReducer = combineReducers({
    factsRed: factsReducer,
    recipesRed: recipesReducer
})

export default rootReducer;
