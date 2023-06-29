import classes from '../trial.module.css';
import NavLinkRouter from './NavLinkRouter';
import logo from '../assets/react.svg';

interface Props {
  name: string;
  count: number;
  children: React.ReactNode;
}
function Header({ name, children, count }: Props) {
  return (
    <div className="header">
      <h3 className={classes.play}>{name}</h3>
      <img src={logo} alt="logo" className="logotext" />
      <span className="logotext count">{count}</span>
      <NavLinkRouter />
    </div>
  );
}

export default Header;
