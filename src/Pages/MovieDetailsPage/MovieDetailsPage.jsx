import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getMovieDetails } from 'components/shared/api/api-movie';
import { Loader } from 'components/shared/Loader/Loader';

import styles from './movie-details-page.module.css';
import defaultimage from './dfi.jpg';

const MovieDetailsPage = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await getMovieDetails(movieId);
        // console.log(result);
        setItem(result);
      } catch (error) {
        setError(error.message);
      } finally {
        return setLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

  const location = useLocation();
  // console.log(location);
  // const from = location.state?.from || '/';
  const backLinkLocation = useRef(location.state?.from ?? '/movies');
  // console.log(backLinkLocation);

  // const navigate = useNavigate();
  // const goBack = () => navigate(from);

  return (
    <>
      {error && <p>...error load ...load failed {error}</p>}
      {loading && <Loader />}

      <div className={styles.wraper}>
        <div className={styles.wrap}>
          <Link to={backLinkLocation.current} className={styles.back}>
            <span>GO BACK</span>
          </Link>

          <div>
            <img
              className={styles.poster}
              src={
                item?.poster_path
                  ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                  : defaultimage
              }
              alt={item.title}
            />
          </div>

          <div className={styles.text}>
            <div>
              <h2>{item.title}</h2>
              <p> {item.release_date}</p>

              <p>
                Vote <span>{Math.ceil(item.vote_average * 100) / 10}%</span>
              </p>
              <p className={styles.genres}>
                Genres:
                {item.genres &&
                  item.genres.map(genre => (
                    <span key={genre.id}>{genre.name}</span>
                  ))}
              </p>
            </div>
          </div>
          <div className={styles.overview}>
            <h5>Overview: {item.overview}</h5>
          </div>
        </div>
        <ul className={styles.page}>
          <Link to={`/movies/${movieId}/cast`} className={styles.link}>
            Actors
          </Link>
          <Link to={`/movies/${movieId}/reviews`} className={styles.link}>
            Reviews
          </Link>
        </ul>
        <Outlet />
      </div>
    </>
  );
};
export default MovieDetailsPage;
