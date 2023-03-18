import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReview } from 'components/shared/api/api-movie';
import PropTypes from 'prop-types';
import styles from './reviews-page.module.css';

const ReviewsPage = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  // const { movieId } = useParams();
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReview = async () => {
      setState(prevState => ({ ...prevState, loading: true, error: null }));
      try {
        const data = await getReview(movieId);
        // console.log(data);
        setState(prevState => ({ ...prevState, items: data }));
      } catch (error) {
        setState(prevState => ({ ...prevState, error }));
      } finally {
        setState(prevState => {
          return { ...prevState, loading: false };
        });
      }
    };
    fetchReview();
  }, [setState, movieId]);

  const { items } = state;
  const elements = items.map(({ id, author, content }) => (
    <li key={id}>
      <h4>Author: {author}</h4>
      <p>{content}</p>
    </li>
  ));
  return (
    <div className={styles.wrap}>
      <h2>Total reviews: {items.length} </h2>
      <ol className={styles.list}>{elements}</ol>
    </div>
  );
};
export default ReviewsPage;

ReviewsPage.propTypes = {
  movieId: PropTypes.string,
};
