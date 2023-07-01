import { styled } from 'styled-components';
import NavLinkRouter from './NavLinkRouter';
import logo from '../assets/react.svg';

interface Props {
  name: string;
  count: number;
  children: React.ReactNode;
}
const Box = styled.div`
  display: block,
  position: fixed,
  Color:rgb(255, 255, 255),
  width: 100%,
  height: 25%,
  background-color: #5e0472,
`;

function Header({ name, children, count }: Props) {
  return (
    <Box>
      <h3>{name}</h3>
      <img src={logo} alt="logo" className="logotext" />
      {count > 0 ? <span className="logotext count">{count}</span> : <p />}
      <NavLinkRouter />
    </Box>
  );
}

export default Header;
