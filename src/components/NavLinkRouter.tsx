import { NavLink } from 'react-router-dom';

export default function NavLinkRouter() {
  return (
    <div className="navlink">
      <NavLink
        style={({ isActive }) => ({
          margin: '1rem 0',
          color: isActive ? 'red' : '',
        })}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          margin: '1rem 0',
          color: isActive ? 'red' : '',
        })}
        to="/product"
      >
        {' '}
        Product{' '}
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          margin: '1rem 0',
          color: isActive ? 'red' : '',
        })}
        to="/about"
      >
        {' '}
        About
      </NavLink>
    </div>
  );
}
