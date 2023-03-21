import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Wrap, Form, Input, Button } from './SearchMovieForm.styled';
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
      <Wrap>
        <Form onSubmit={handleSubmit}>
          <Input
            name="search"
            value={state.search}
            onChange={handleChange}
            placeholder="search movie"
            required
          />
          <Button type="submit">SEARCH</Button>
        </Form>
      </Wrap>
    </>
  );
};

export default SearchMovie;

SearchMovie.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
