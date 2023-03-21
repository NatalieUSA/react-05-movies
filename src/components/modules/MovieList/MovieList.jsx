import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, StyledLink } from './MovieList.styled';

const MovieList = ({ items }) => {
  const location = useLocation();

  const elements = items.map(({ id, title }) => (
    <li key={id}>
      <StyledLink
        state={{ from: location }}
        to={`/movies/${id}`}
        // className={styles.link}
      >
        {title}
      </StyledLink>
    </li>
  ));
  return <List>{elements}</List>;
};

export default MovieList;

MovieList.defaultProps = {
  items: [],
};

MovieList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
