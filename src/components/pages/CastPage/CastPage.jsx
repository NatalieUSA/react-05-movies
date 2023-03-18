import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCast } from 'components/shared/api/api-movie';
import defaultimage from './dfi.jpg';
import PropTypes from 'prop-types';
import styles from './cast-page.module.css';
import { Loader } from 'components/shared/Loader/Loader';

const CastPage = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      setState(prevState => ({ ...prevState, loading: true, error: null }));
      try {
        const result = await getCast(movieId);
        // console.log(result);
        setState(prevState => ({ ...prevState, items: result }));
      } catch (error) {
        setState(prevState => ({ ...prevState, error }));
      } finally {
        setState(prevState => {
          return { ...prevState, loading: false };
        });
      }
    };
    fetchCast();
  }, [setState, movieId]);

  const { items, loading } = state;
  // console.log(items);
  // console.log(items.cast);

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
    </div>
  );
};
export default CastPage;

CastPage.propTypes = {
  movieId: PropTypes.string,
};
