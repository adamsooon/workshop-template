import { stringify } from "qs";

const paramsSerializer = (params) =>
  stringify(params, { arrayFormat: "repeat", skipNulls: true });

export default paramsSerializer;
