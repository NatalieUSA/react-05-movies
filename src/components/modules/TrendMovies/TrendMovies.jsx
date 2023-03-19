import { useState, useEffect } from 'react';
import MovieList from '../MovieList/MovieList';
import { getTrendingMovie } from './../../shared/api/api-movie';
// import styles from './trend-movies.module.css';

const TrendMovies = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await getTrendingMovie();
        setItems(result);
        console.log(result);
      } catch (error) {
        setError(error.message);
      } finally {
        return setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      {items.length && <MovieList items={items} />}
      {loading && <p>...load posts</p>}
      {error && <p>...error load movie...movie load failed</p>}
    </div>
  );
};

export default TrendMovies;
