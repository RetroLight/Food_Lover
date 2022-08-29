import {call, all, takeLatest, put} from 'redux-saga/effects';
import {factsActionTypes} from "./facts.types";
import {funFactsData} from "../../data/funFactsData";
import {updateFactsSuccess, updateFactsFailure} from "./facts.actions";

export function* updateFactsAsync() {
    try {
        const factsCollection = funFactsData;
        yield put(updateFactsSuccess(factsCollection))
    } catch(error) {
        yield put(updateFactsFailure(error))
    }
}

export function* updateFactsStart() {
    yield takeLatest(factsActionTypes.FETCH_FACTS_START, updateFactsAsync);
}

export function* factsSaga() {
    yield all([call(updateFactsStart)])
}




