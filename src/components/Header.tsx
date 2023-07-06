import { styled } from 'styled-components';
import NavLinkRouter from './NavLinkRouter';
import carrot from '../assets/carrot.svg';
import { useStoreActions } from '../hooks/Easy-peasy-hooks';

interface Props {
  name: string;
  count: number;
  children: React.ReactNode;
}
const Box = styled.div`
  background: ${(props) => props.theme.primary};
  position: fixed;
  display: block;
  width: 100%;
  height: 11em;
  z-index: 1;
`;
const H3 = styled.h3`
  color: rgba(97, 218, 251, 0.667);
  margin-left: 2em;
  text-align: left;
`;

const Span = styled.a`
  text-align: left;
  margin-left: 2em;
  border-radius: 10px;
  border: 1px solid transparent;
  padding: 0.2em 1em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: rgba(97, 218, 251, 0.667);
`;

const Img = styled.img`
  width: 3em;
  height: 3em;
`;
const Toggle = styled.button`
  float: right;
  margin-right: 3em;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.buttonColor};
`;

function Header({ name, children, count }: Props) {
  const { ChangeMode } = useStoreActions((state) => state.theme);
  const handleClick = () => {
    ChangeMode(undefined);
  };
  return (
    <Box>
      <p>
        <H3>{name}</H3>
        <label className="switch">
          <input type="checkbox" onChange={handleClick} />
          <span className="slider round" />
        </label>
      </p>
      <Img src={carrot} alt="logo" className="logotext" />

      <div>
        {count > 0 ? <Span>{count}</Span> : <p />}

        <NavLinkRouter />
      </div>
    </Box>
  );
}

export default Header;
