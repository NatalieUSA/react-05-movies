import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCast } from 'components/shared/api/api-movie';
import defaultimage from './dfi.jpg';

import { Loader } from 'components/shared/Loader/Loader';
import { Image, Total, Wrap } from './CastPage.styled';

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
    <Wrap>
      <Total>Total actors: {items.length} </Total>
      {items.length > 0 &&
        items.map(item => (
          <Image
            key={movieId}
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
    </Wrap>
  );
};
export default CastPage;

CastPage.propTypes = {
  movieId: PropTypes.string,
};
