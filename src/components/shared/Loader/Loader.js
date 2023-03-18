import { Dna } from 'react-loader-spinner';
import styles from './loader.module.css';

export const Loader = () => (
  <div className={styles.loader}>
    <Dna
      visible={true}
      height="380"
      width="380"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  </div>
);
