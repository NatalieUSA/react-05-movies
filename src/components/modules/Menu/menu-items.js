import { nanoid } from 'nanoid';

const menuItems = [
  {
    id: nanoid(),
    to: '/',
    text: 'Home ',
  },
  {
    id: nanoid(),
    to: '/movies',
    text: 'Movies',
  },
  {
    id: nanoid(),
    to: '/feedback',
    text: 'Feedback',
  },
];

export default menuItems;
