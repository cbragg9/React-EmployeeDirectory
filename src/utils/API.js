import axios from "axios";
const URL = "https://randomuser.me/api/?results=200&nat=u";

export default {
  search: function() {
    return axios.get(URL);
  }
}