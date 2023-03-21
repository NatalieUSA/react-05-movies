import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { getMovieDetails } from 'components/shared/api/api-movie';
import { Loader } from 'components/shared/Loader/Loader';

import defaultimage from './dfi.jpg';
import {
  Genres,
  Overview,
  Poster,
  StyledLink,
  Text,
  Wrap,
  Wraper,
  StyledLinkInfo,
  PosterLinkWrap,
} from './MovieDetailsPage.styled';

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

      <Wraper>
        <Wrap>
          <PosterLinkWrap>
            <StyledLink to={backLinkLocation.current}>
              <span>GO BACK</span>
            </StyledLink>

            <Poster
              src={
                item?.poster_path
                  ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                  : defaultimage
              }
              alt={item.title}
            />
          </PosterLinkWrap>

          <Text>
            <div>
              <h2>{item.title}</h2>
              <p> {item.release_date}</p>

              <p>
                Vote <span>{Math.ceil(item.vote_average * 100) / 10}%</span>
              </p>
              <Genres>
                Genres:
                {item.genres &&
                  item.genres.map(genre => (
                    <span key={genre.id}>{genre.name}</span>
                  ))}
              </Genres>
            </div>
          </Text>
          <Overview>
            <h5>Overview: {item.overview}</h5>
          </Overview>
        </Wrap>
        <ul>
          <StyledLinkInfo to={`/movies/${movieId}/cast`}>Actors</StyledLinkInfo>
          <StyledLinkInfo to={`/movies/${movieId}/reviews`}>
            Reviews
          </StyledLinkInfo>
        </ul>
        <Outlet />
      </Wraper>
    </>
  );
};
export default MovieDetailsPage;

MovieDetailsPage.propTypes = {
  movieId: PropTypes.string,
};
