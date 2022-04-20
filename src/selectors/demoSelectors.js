import { createSelector } from "reselect";

export const getDemo = (state) => state.get("demo");

export const getDemoAlbum = createSelector(getDemo, (demo) =>
  demo.get("album")
);
