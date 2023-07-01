import { NavLink } from 'react-router-dom';

export default function NavLinkRouter() {
  return (
    <span className="navlink">
      <NavLink
        className="item"
        style={({ isActive }) => ({
          color: isActive ? 'white' : '',
        })}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="item"
        style={({ isActive }) => ({
          color: isActive ? 'white' : '',
        })}
        to="/product"
      >
        {' '}
        Product{' '}
      </NavLink>
      <NavLink
        className="item"
        style={({ isActive }) => ({
          color: isActive ? 'white' : '',
        })}
        to="/about"
      >
        {' '}
        About
      </NavLink>
    </span>
  );
}
