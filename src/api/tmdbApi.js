import axios from "axios";
import apiConfig from "./apiConfig";
import axiosClient from "./axiosClient";

export const category = {
  movie: "movie",
  tv: "tv",
};

export const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};

export const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};

const tmdbApi = {
  getMoviesList: (type, params) => {
    const url = "movie/" + movieType[type];
    return axiosClient.get(url, params);
  },
  getTvList: (type, params) => {
    const url = "tv/" + tvType[type];
    return axiosClient.get(url, params);
  },
  getVideos: (cate, id) => {
    const url = category[cate] + "/" + id + "/videos";
    return axiosClient.get(url, { params: {} });
  },
  search: (cate, params) => {
    const url = "search/" + category[cate];
    return axiosClient.get(url, params);
  },
  detail: (cate, id, params) => {
    const url = category[cate] + "/" + id;
    return axiosClient.get(url, params);
  },
  credits: (cate, id) => {
    const url = category[cate] + "/" + id + "/credits";
    return axiosClient.get(url, { params: {} });
  },
  similar: (cate, id) => {
    const url = category[cate] + "/" + id + "/similar";
    return axiosClient.get(url, { params: {} });
  },
  actors: (id) => {
    const url = "person/" + id;
    return axiosClient.get(url, { params: {} });
  },
  actorMovie: (id) => {
    const url = "person/" + id + "/movie_credits";
    return axiosClient.get(url, { params: {} });
  },

  search: () => {
    const url = "search/movie";
    return axiosClient.get(url, { params: {} });
  },
};
const apiBaseUrl = apiConfig.baseUrl;
const apiKey = apiConfig.apiKey;
const searchMoviesEndpoint = `${apiBaseUrl}/search/multi?api_key=${apiKey}`;

const apiCall = async (endpoint, params) => {
  const options = {
    method: "GET",
    url: endpoint,
    params: params ? params : {},
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("error:", error);
    return {};
  }
};

export const searchMovies = (params) => {
  return apiCall(searchMoviesEndpoint, params);
};

export default tmdbApi;
