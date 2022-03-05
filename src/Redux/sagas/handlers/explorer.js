//store the data into our redux createStore
import { call, put } from "redux-saga/effects";
import { setTrending } from "../../reducer/explorer";
import { requestGetTrendingSongs } from "../requests/explorer";

export function* handleGetTrendingSongs(action) {
  try {
    const response = yield call(requestGetTrendingSongs);
    const { data } = response;
    yield put(setTrending(data));
  } catch (error) {
    console.log(error);
  }
}
