import { all, takeEvery } from "redux-saga/effects";

import * as types from "../constants/actionTypes";
import fetchDemoAlbum from "./demo/fetchDemoAlbum";

export default function* rootSaga() {
  yield all([takeEvery(types.fetchDemoAlbum, fetchDemoAlbum)]);
}
