import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const getTrendingMovie = async (page = 1) => {
  const { data } = await instance.get(
    '/trending/movie/week?api_key=f7a41df070de2591b426f4643d7fd0fb&language=en-US'
  );
  return data.results;
};

export const getMovieDetails = async movieId => {
  const response = await instance.get(
    `/movie/${movieId}?api_key=f7a41df070de2591b426f4643d7fd0fb&language=en-US`
  );
  return response.data;
};

export const getCast = async movieId => {
  const { data } = await instance.get(
    `/movie/${movieId}}/credits?api_key=f7a41df070de2591b426f4643d7fd0fb&language=en-US`
  );
  return data.cast;
};

export const getReview = async movieId => {
  const { data } = await instance.get(
    `/movie/${movieId}/reviews?api_key=f7a41df070de2591b426f4643d7fd0fb&language=en-US`
  );
  return data.results;
};
