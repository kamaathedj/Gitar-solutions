import classes from '../trial.module.css';
import NavLinkRouter from './NavLinkRouter';

interface Props {
  name: string;
  count: number;
  children: React.ReactNode;
}
function Header({ name, children, count }: Props) {
  return (
    <div className="header">
      <h3 className={classes.play}>{name}</h3>
      <h5 className="logotext">{children}</h5>
      <span className="logotext count">{count}</span>
      <NavLinkRouter />
    </div>
  );
}

export default Header;
