import * as types from "../constants/actionTypes";

export const setDemoAlbum = (value) => ({
  type: types.setDemoAlbum,
  value,
});

export const fetchDemoAlbum = id => ({
  type: types.fetchDemoAlbum,
  id
});
