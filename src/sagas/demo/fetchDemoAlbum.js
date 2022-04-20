import { call, put } from "redux-saga/effects";

import getDemoAlbum from "./utils/getDemoAlbum";
import { setDemoAlbum } from "../../actions/demoActions";

export default function* fetchDemoAlbum({ id }) {
  try {
    const album = (yield call(getDemoAlbum, id)).data[0];
    yield put(setDemoAlbum(album));
  } catch (e) {
    console.error("Shit happens", e);
  }
}
