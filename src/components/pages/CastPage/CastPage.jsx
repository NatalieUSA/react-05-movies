import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCast } from 'components/shared/api/api-movie';
import defaultimage from './dfi.jpg';

import styles from './cast-page.module.css';

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
        console.log(result);
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
  console.log(items);
  // console.log(items.cast);

  return (
    <div className={styles.imgwrap}>
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
      {loading && <p>...load actors</p>}
      {items.length === 0 && (
        <p className={styles.info}>We have no info about actors</p>
      )}
    </div>

    // <div>
    //   <button>Go back</button>
    //   <h1>CastPage</h1>

    // </div>
  );
};
export default CastPage;
