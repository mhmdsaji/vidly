import http from "./httpService";
import { apiUrl, apiKey } from "../config.json";

export function getGenres() {
  return http.get(`${apiUrl}/genre/movie/list?api_key=${apiKey}`);
}

export function getGenreName(genres, genre_id) {
  const genre = genres.filter(g => g.id === genre_id);
  return genre[0].name;
}