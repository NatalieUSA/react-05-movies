import { useState, useEffect } from 'react';
import MovieList from '../MovieList/MovieList';
import { getTrendingMovie } from './../../shared/api/api-movie';
// import styles from './trend-movies.module.css';

const TrendMovies = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchPosts = async () => {
      setState(prevState => ({ ...prevState, loading: true, error: null }));
      try {
        const result = await getTrendingMovie();
        setState(prevState => {
          return { ...prevState, items: [...prevState.items, ...result] };
        });
      } catch (error) {
        setState(prevState => ({ ...prevState, error }));
      } finally {
        setState(prevState => {
          return { ...prevState, loading: false };
        });
      }
    };
    fetchPosts();
  }, [setState]);

  const { items, loading, error } = state;

  return (
    <div>
      {items.length && <MovieList items={items} />}
      {loading && <p>...load posts</p>}
      {error && <p>...error load posts...posts load failed</p>}
    </div>
  );
};

export default TrendMovies;
// {
//   /* <Link to={`/movies/${id}`}>{title}</Link> */
// }
