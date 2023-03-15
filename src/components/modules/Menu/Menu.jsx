import { NavLink } from 'react-router-dom';
import menuItems from './menu-items';
import styles from './menu.module.css';

const Menu = () => {
  const elements = menuItems.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink to={to} className={styles.link}>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <div>
      <ul className={styles.wrapper}>{elements}</ul>
    </div>
  );
};

export default Menu;
