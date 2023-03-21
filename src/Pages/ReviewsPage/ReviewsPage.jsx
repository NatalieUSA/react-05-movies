import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getReview } from 'components/shared/api/api-movie';
import { Loader } from 'components/shared/Loader/Loader';

import { Wrap } from './ReviewsPage .styled';

const ReviewsPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchReview = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await getReview(movieId);
        // console.log(data);
        setItems(result);
      } catch (error) {
        setError(error.message);
      } finally {
        return setLoading(false);
      }
    };
    fetchReview();
  }, [movieId]);

  const elements = items.map(({ id, author, content }) => (
    <li key={id}>
      <h4>Author: {author}</h4>
      <p>{content}</p>
    </li>
  ));
  return (
    <Wrap>
      <h2>Total reviews: {items.length} </h2>
      <ol>{elements}</ol>

      {loading && <Loader />}
      {error && <p>...error load ...load failed</p>}
    </Wrap>
  );
};
export default ReviewsPage;

ReviewsPage.propTypes = {
  movieId: PropTypes.string,
};
