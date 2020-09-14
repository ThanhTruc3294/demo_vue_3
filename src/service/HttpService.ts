import axios from "axios";
import MyConfig from "../_config";

export default axios.create({
  baseURL: MyConfig.host,
  headers: {
    "Content-type": "application/json"
  }
});
