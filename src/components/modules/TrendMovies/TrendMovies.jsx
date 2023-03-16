import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovie } from './../../shared/api/api-movie';
import styles from './trend-movies.module.css';

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
        // console.log(result.id);
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
  //   console.log(items);

  const elements = items.map(({ id, title }) => (
    <li key={id}>
      <Link to={`/movies/${id}`} className={styles.link}>
        {title}
      </Link>
    </li>
  ));
  return (
    <div>
      <ol className={styles.list}>{elements}</ol>

      {loading && <p>...load posts</p>}
      {error && <p>...error load posts...posts load failed</p>}
    </div>
  );
};

export default TrendMovies;
// {
//   /* <Link to={`/movies/${id}`}>{title}</Link> */
// }
