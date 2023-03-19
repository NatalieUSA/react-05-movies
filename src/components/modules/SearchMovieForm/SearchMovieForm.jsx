import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './search-movie-form.module.css';

const SearchMovie = ({ onSubmit }) => {
  const [state, setState] = useState({
    search: '',
  });

  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);
  const query = searchParams.get('query') || '';
  console.log(query);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    console.log(target);
    console.log(name);
    setState({ [name]: value });

    if (value === '') {
      return setSearchParams({});
    }
    setSearchParams({ search: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ search: '' });
    reset();
  };

  const reset = () => {
    setState({
      search: '',
    });
  };

  return (
    <>
      <div className={styles.wrap}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            name="search"
            value={state.search}
            onChange={handleChange}
            placeholder="тут ти можеш знайти любе кіно ;-))"
            required
          />
          <button className={styles.btn} type="submit">
            SEARCH
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchMovie;

SearchMovie.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
