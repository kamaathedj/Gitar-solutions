import classes from '../trial.module.css';
import NavLinkRouter from './NavLinkRouter';

interface Props {
  name: string;
  children: React.ReactNode;
}
function Header({ name, children }: Props) {
  return (
    <div className="header">
      <h3 className={classes.play}>{name}</h3>
      <h5 className="logotext">{children}</h5>
      <NavLinkRouter />
    </div>
  );
}

export default Header;
