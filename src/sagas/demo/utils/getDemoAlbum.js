import demoAPI from "../../../api/demoAPI";

export default function getDemoAlbum(id) {
  return demoAPI.get("albums", { params: { id } });
}
