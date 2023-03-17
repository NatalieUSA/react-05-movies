import TrendMovies from 'components/modules/TrendMovies/TrendMovies';
import styles from './home-page.module.css';

const HomePage = () => {
  return (
    <div className={styles.wrap}>
      <div>
        <h3>Trending movies of the last week</h3>
        {/* {items.length && <TrendMovies items={items} />} */}
        <TrendMovies />
      </div>
    </div>
  );
};

export default HomePage;
