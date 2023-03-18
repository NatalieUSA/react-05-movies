//import MovieDetailsPage from '../MovieDetailsPage/MovieDetailsPage';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchMovieForm from 'components/modules/SearchMovieForm/SearchMovieForm';
import { getSearchMovie } from 'components/shared/api/api-movie';
import MovieList from 'components/modules/MovieList/MovieList';
import { Loader } from 'components/shared/Loader/Loader';

const MoviesPage = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  console.log(search);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
        }));
        const data = await getSearchMovie(search);
        //   alert('NOOOOO');

        setState(prevState => ({
          ...prevState,
          items: data.results,
        }));
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          error,
        }));
      } finally {
        setState(prevState => ({
          ...prevState,
          loading: false,
        }));
      }
    };

    if (search) {
      fetchMovie();
    }
  }, [search]);

  const changeSearch = ({ search }) => {
    setSearchParams({ search });
  };

  const { items, loading } = state;
  console.log(items);
  return (
    <div>
      <SearchMovieForm onSubmit={changeSearch} />
      {items.length > 0 && <MovieList items={items} />}

      {loading && <Loader />}
    </div>
  );
};

export default MoviesPage;
