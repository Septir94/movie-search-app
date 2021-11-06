import Axios from "axios";
export const fetchMovieService = {
  searchMovieList: async function (keyword, page) {
    const response = await Axios({
      url: process.env.REACT_APP_BASE_URL + `s=${keyword}&page=${page}`,
      method: "GET",
      responseType: "json",
    });
    return response.data;
  },
  getMovieDetail: async function (id) {
    const response = await Axios({
      url: process.env.REACT_APP_BASE_URL + "i=" + id,
      method: "GET",
      responseType: "json",
    });
    return response.data;
  },
  getMovieByType: async function (request) {
    const response = await Axios({
      url:
        process.env.REACT_APP_BASE_URL +
        `s=${request.keyword}&page=${request.page}&y=${request.year}&type=${request.type}`,
      method: "GET",
      responseType: "json",
    });
    return response.data;
  },
};
