// import { useParams, useNavigate, Outlet, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'components/shared/api/api-movie';

const MovieDetailsPage = () => {
  const [state, setState] = useState({
    item: {},
    loading: false,
    error: null,
  });
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchMovie = async () => {
      setState(prevState => ({ ...prevState, loading: true, error: null }));
      try {
        const result = await getMovieDetails(id);
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
  }, [setState, id]);
  const { item } = state;
  // // const { title, overview, poster_path } = state;
  // console.log(item);
  // console.log(item);
  return (
    <div>
      <h4>MovieDetailsPage</h4>
      <h2>
        {item.original_title} {item.release_date}
      </h2>
      {/* <h3>{title}</h3>
      <h5>{overview}</h5>
      <img src="{poster_path }" alt="{title}" /> */}
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
