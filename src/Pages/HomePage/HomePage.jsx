import TrendMovies from 'components/modules/TrendMovies/TrendMovies';
import { Wrap, Title } from './HomePage.styled';

const HomePage = () => {
  return (
    <Wrap>
      <div>
        <Title>Trending movies of the last week</Title>

        <TrendMovies />
      </div>
    </Wrap>
  );
};

export default HomePage;
