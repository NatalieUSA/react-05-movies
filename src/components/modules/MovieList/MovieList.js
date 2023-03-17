import { Link, useLocation } from 'react-router-dom';
import styles from './movie-list.module.css';

const MovieList = ({ items }) => {
  const location = useLocation();
  console.log('MovieList', location);

  const elements = items.map(({ id, title }) => (
    <li key={id}>
      <Link
        state={{ from: location }}
        to={`/movies/${id}`}
        className={styles.link}
      >
        {title}
      </Link>
    </li>
  ));
  return <ol className={styles.list}>{elements}</ol>;
};

export default MovieList;

MovieList.defaultProps = {
  items: [],
};
