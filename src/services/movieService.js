import http from "./httpService";
import { apiUrl, apiKey } from "../config.json";

const apiEndpoint = apiUrl + "/movie/top_rated?api_key=" + apiKey;

function movieUrl(id) {
  return `${apiEndpoint}/${id}?api_key=${apiKey}`;
}

export function getMovies() {
  return http.get(apiEndpoint);
}

export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }

  return http.post(apiEndpoint, movie);
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}
