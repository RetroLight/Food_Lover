import {all, call, put, takeLatest} from "redux-saga/effects";
import {updateRecipesSuccess, updateRecipesFailure} from "./recipes.actions";
import {recipesActionTypes} from "./recipes.types";


export function* updatesRecipesAsync({payload}) {
    try {
        const recipesData = yield fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${payload}&app_id=f92545aa&app_key=b85359afe7ca35b9110d0a9b41127392&imageSize=REGULAR`);
        const recipesArr = yield recipesData.json()
        yield put(updateRecipesSuccess(recipesArr, payload))
    } catch(error) {
        yield put(updateRecipesFailure(error))
    }
}

export function* updateRecipesStart() {
    yield takeLatest(recipesActionTypes.RECIPES_FETCHING_START, updatesRecipesAsync);
}

export function* recipesSaga() {
    yield all([call(updateRecipesStart)])
}


