import axios from "axios";

axios.defaults.baseURL =
  "https://pixabay.com/api/?key=24828507-89537ba0cc73f2aa36f96abcf&image_type=photo&orientation=horizontal";

function Info(search, page) {
  return axios.get(`/search?query=react&page=${page}&per_page=12&q=${search}`);
}

export default Info;
