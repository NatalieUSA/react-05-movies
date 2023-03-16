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

// export const getMovieDetails = async movieId => {
//   const response = await instance.get(
//     '/movie/`${movieId}`?api_key=f7a41df070de2591b426f4643d7fd0fb&language=en-US'
//   );
//   return response.data;
// };
export const getMovieDetails = async id => {
  const response = await instance.get(
    `/movie/${id}?api_key=f7a41df070de2591b426f4643d7fd0fb&language=en-US`
  );
  return response.data;
};
