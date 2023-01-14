import { NavLink } from 'react-router-dom';

import './Menu.css';

const Menu: React.FC = (): JSX.Element => {
  return (
    <div className="Menu">
      <NavLink to="/home">Home</NavLink>
      <span> | </span>
      <NavLink to="/appointments">Appointments</NavLink>
      <span> | </span>
      <NavLink to="/add">Add</NavLink>
    </div>
  );
};

export default Menu;
