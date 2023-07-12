import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "d6910c185e2240d6af55222c3b4c9346" },
});
