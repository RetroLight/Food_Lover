import {call, all} from 'redux-saga/effects';
import {factsSaga} from "./facts/facts-sagas";
import {recipesSaga} from "./recipes/recipes-sagas";

export function* rootSaga() {
    yield all([call(factsSaga), call(recipesSaga)]);
}
