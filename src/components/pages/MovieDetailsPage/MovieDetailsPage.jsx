// import { useParams, useNavigate, Outlet, useLocation } from 'react-router-dom';
import {
  useParams,
  useNavigate,
  Link,
  Outlet,
  // useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'components/shared/api/api-movie';

import styles from './movie-details-page.module.css';

const MovieDetailsPage = () => {
  const [state, setState] = useState({
    item: {},
    loading: false,
    error: null,
  });
  const { movieId } = useParams();
  // console.log(id);

  useEffect(() => {
    const fetchMovie = async () => {
      setState(prevState => ({ ...prevState, loading: true, error: null }));
      try {
        const result = await getMovieDetails(movieId);
        console.log(result);

        setState(prevState => {
          return { ...prevState, item: result };
        });
      } catch (error) {
        setState(prevState => ({ ...prevState, error }));
      } finally {
        setState(prevState => {
          return { ...prevState, loading: false };
        });
      }
    };
    fetchMovie();
  }, [setState, movieId]);

  const navigate = useNavigate();
  // console.log(navigate);
  const goBack = () => navigate(-1);

  // const location = useLocation();

  const { item } = state;
  // // const { title, overview, poster_path } = state;
  // console.log(item);
  // console.log(item);
  return (
    <div className={styles.wraper}>
      <div className={styles.wrap}>
        <button className={styles} onClick={goBack}>
          <span>GO BACK</span>
        </button>
        <div>
          <img
            className={styles.poster}
            src={
              item?.poster_path &&
              `https://image.tmdb.org/t/p/w500${item.poster_path}`
            }
            alt=""
            // alt={item.title}
          />
        </div>

        <div className={styles.text}>
          <div>
            <h4>MovieDetailsPage</h4>
            <h2>
              Title:
              {item.title}
            </h2>
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
  );
};
export default MovieDetailsPage;

//
//
// import { getSinglePost } from '../../shared/api/api-posts';

// import { Link } from 'react-router-dom';

// const SinglePostPageOld = () => {
//   const [state, setState] = useState({
//     item: {},
//     loading: false,
//     error: null,
//   });

//   const { id } = useParams();
//   //   console.log(id);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       setState(prevState => ({ ...prevState, loading: true, error: null }));
//       try {
//         const result = await getSinglePost(id);
//         setState(prevState => {
//           return { ...prevState, item: result };
//         });
//       } catch (error) {
//         setState(prevState => ({ ...prevState, error }));
//       } finally {
//         setState(prevState => {
//           return { ...prevState, loading: false };
//         });
//       }
//     };
//     fetchPosts();
//   }, [setState, id]);

//   const location = useLocation();
//   const from = location.state?.from || './posts';
//   console.log('SinglePostPageOld', location);

//   const navigate = useNavigate();
//   // console.log(navigate);
//   const goBack = () => navigate(from);

//   const { title, body } = state.item;

//   return (
//     <div>
//       <button onClick={goBack}>GO BACK</button>
//       <h3>{title}</h3>
//       <p>{body}</p>
//       <Link state={{ from }} to={`/posts/${id}/comments`}>
//         show comments
//       </Link>

//       <Outlet />
//     </div>
//   );
// };
// export default SinglePostPageOld;
