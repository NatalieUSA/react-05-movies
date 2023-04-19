import { BrowserRouter } from 'react-router-dom';

import MovieRoutes from './MovieRoutes';
import Menu from './modules/Menu/Menu';

export const App = () => {
  return (
    <BrowserRouter basename="/react-05-movies">
      <Menu />
      <MovieRoutes />
    </BrowserRouter>
  );
};

//  style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
