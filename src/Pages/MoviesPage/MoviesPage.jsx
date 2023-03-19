import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchMovieForm from 'components/modules/SearchMovieForm/SearchMovieForm';
import { getSearchMovie } from 'components/shared/api/api-movie';
import MovieList from 'components/modules/MovieList/MovieList';
import { Loader } from 'components/shared/Loader/Loader';

const MoviesPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  console.log(search);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      try {
        const data = await getSearchMovie(search);
        setItems(data.results);
        // alert('NOOOOO');
      } catch (error) {
        setError(error.message);
      } finally {
        return setLoading(false);
      }
    };

    if (search) {
      fetchMovie();
    }
  }, [search]);

  const changeSearch = ({ search }) => {
    setSearchParams({ search });
  };

  return (
    <div>
      <SearchMovieForm onSubmit={changeSearch} />
      {items.length > 0 && <MovieList items={items} />}

      {loading && <Loader />}
      {error && <p>...error load ...load failed {error}</p>}
    </div>
  );
};

export default MoviesPage;
