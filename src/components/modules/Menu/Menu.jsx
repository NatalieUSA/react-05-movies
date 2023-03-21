import menuItems from './menu-items';
import { List, StyledNavLink } from './Menu.styled';

const Menu = () => {
  const elements = menuItems.map(({ id, to, text }) => (
    <li key={id}>
      <StyledNavLink to={to}>{text}</StyledNavLink>
    </li>
  ));

  return (
    <div>
      <List>{elements}</List>
    </div>
  );
};

export default Menu;
