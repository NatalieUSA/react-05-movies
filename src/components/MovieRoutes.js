import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader } from './shared/Loader/Loader';

const HomePage = lazy(() => import('Pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('Pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('Pages/MovieDetailsPage/MovieDetailsPage')
);
const CastPage = lazy(() => import('Pages/CastPage/CastPage'));
const NotFoundPage = lazy(() => import('Pages/NotFoundPage/NotFoundPage'));
const ReviewsPage = lazy(() => import('Pages/ReviewsPage/ReviewsPage'));

const MovieRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route> *
      </Routes>
    </Suspense>
  );
};

export default MovieRoutes;
