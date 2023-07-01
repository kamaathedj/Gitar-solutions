import { styled } from 'styled-components';
import NavLinkRouter from './NavLinkRouter';
import logo from '../assets/react.svg';

interface Props {
  name: string;
  count: number;
  children: React.ReactNode;
}
const Box = styled.div`
  background: #5e0472;
  position: absolute;
  display: block;
  width: 100%;
  height: 10em;
`;
const H3 = styled.h3`
  color: rgba(97, 218, 251, 0.667);
  margin-left: 2em;
  text-align: left;
`;

const Span = styled.span`
  text-align: left;
  margin-left: 2em;
  border-radius: 10px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: rgba(97, 218, 251, 0.667);
`;

function Header({ name, children, count }: Props) {
  return (
    <Box>
      <H3>{name}</H3>
      <img src={logo} alt="logo" className="logotext" />
      {count > 0 ? <Span>{count}</Span> : <p />}
      <NavLinkRouter />
    </Box>
  );
}

export default Header;
