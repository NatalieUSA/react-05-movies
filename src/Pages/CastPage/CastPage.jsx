import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCast } from 'components/shared/api/api-movie';
import defaultimage from './dfi.jpg';

import styles from './cast-page.module.css';
import { Loader } from 'components/shared/Loader/Loader';

const CastPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await getCast(movieId);
        // console.log(result);
        setItems(result);
      } catch (error) {
        setError(error.message);
      } finally {
        return setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <div className={styles.imgwrap}>
      <h2 className={styles.total}>Total actors: {items.length} </h2>
      {items.length > 0 &&
        items.map(item => (
          <img
            key={movieId}
            className={styles.cast}
            src={
              item?.profile_path
                ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                : defaultimage
            }
            alt={`actor ${item.name}`}
          />
        ))}
      {loading && <Loader />}
      {error && <p>...error load actors...actors load failed {error}</p>}
    </div>
  );
};
export default CastPage;

CastPage.propTypes = {
  movieId: PropTypes.string,
};
