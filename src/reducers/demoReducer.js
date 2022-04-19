import { fromJS } from "immutable";
import * as types from "../constants/actionTypes";

const initialState = fromJS({
  album: {},
});

export default function demoReducer(state = initialState, action) {
  switch (action.type) {
    case types.setDemoAlbum:
      return state.set("album", action.value);
    default:
      return state;
  }
}
