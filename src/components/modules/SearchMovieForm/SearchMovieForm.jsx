import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './search-movie-form.module.css';

const SearchMovie = ({ onSubmit }) => {
  const [state, setState] = useState({
    search: '',
  });
  console.log(state);

  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);
  // const query = searchParams.get('query');
  // console.log(query);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    console.log(target);
    console.log(name);
    setState({ [name]: value });

    // const nextParams = value !== '' ? { value } : {};
    // setSearchParams(nextParams);
    if (value === '') {
      return setSearchParams({});
    }
    setSearchParams({ search: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(state);
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
      {/* !!!!! ДОДАТИ!!! LOADING + ERROR */}
      <div className={styles.wrap}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            name="search"
            value={state.search}
            onChange={handleChange}
            placeholder="search movie"
            required
          />
          <button
            className={styles.btn}
            type="submit"
            //   className={styles.btn}
          >
            SEARCH
          </button>
        </form>
      </div>

      {/* {state.search && <MovieDetailsPage />} */}
    </>
  );
};

export default SearchMovie;

// import { useState } from 'react';

// const SearchMovie = ({ onSubmit }) => {
//   const [state, setState] = useState({
//     search: '',
//   });

//   const handleChange = ({ target }) => {
//     const { name, value } = target;
//     setState({ [name]: value });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log(state);
//     onSubmit({ ...state });
//     setState({ search: '' });
//     reset();
//   };

//   const reset = () => {
//     setState({
//       search: '',
//     });
//   };

//   return (
//     <>
//       {/* !!!!! ДОДАТИ!!! LOADING + ERROR */}
//       <form
//         onSubmit={handleSubmit}
//         //   className={styles.form}
//       >
//         <input
//           // className={styles.input}
//           name="search"
//           value={state.search}
//           onChange={handleChange}
//           placeholder="search movie"
//           required
//         />
//         <button
//           type="submit"
//           //   className={styles.btn}
//         >
//           SEARCH
//         </button>
//       </form>

//       {/* {state.search && <MovieDetailsPage />} */}
//     </>
//   );
// };

// export default SearchMovie;
