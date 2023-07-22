import { styled } from 'styled-components';
import macbook from '../assets/macbook-pro.svg';
import { useStoreActions } from '../hooks/Easy-peasy-hooks';

interface Props {
  name: string;
}
const Box = styled.div`
  background: ${(props) => props.theme.primary};
  position: absolute;
  width: 100%;
  height: 7em;
  z-index: 1;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;
const H3 = styled.h3`
  color: rgba(97, 218, 251, 0.667);
  margin-left: 2em;
  text-align: left;
`;
const Img = styled.img`
  width: 3em;
  height: 3em;
`;
const Align = styled.div`
  display: flex;
  justify-content: flex-start;
`;
function Header({ name }: Props) {
  const { ChangeMode } = useStoreActions((state) => state.theme);
  const handleClick = () => {
    ChangeMode(undefined);
  };
  return (
    <Box>
      <Align>
        <Img src={macbook} alt="logo" className="logotext" />
        <H3>{name} 😎</H3>
      </Align>
      <label className="switch">
        <input type="checkbox" onChange={handleClick} />
        <span className="slider round" />
      </label>
      {/* <NavLinkRouter /> */}
    </Box>
  );
}

export default Header;
