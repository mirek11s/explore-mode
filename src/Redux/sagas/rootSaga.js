import { takeLatest } from "redux-saga/effects";
import { handleGetTrendingSongs } from "./handlers/explorer";
import { GET_TRENDING } from "../reducer/explorer";

//watcher saga goes here
export function* watcherSaga() {
  yield takeLatest(GET_TRENDING, handleGetTrendingSongs);
}


