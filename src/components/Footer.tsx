import { styled } from 'styled-components';

const Div = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  z-index: 1;
  text-align: center;
  background: ${(props) => props.theme.primary};
`;
const P = styled.p`
  color: ${(props) => props.theme.text};
`;
function Footer() {
  return (
    <Div>
      <P>Website still under construction</P>
    </Div>
  );
}

export default Footer;
