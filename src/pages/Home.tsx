import { styled } from 'styled-components';
import { useStoreState } from '../hooks/Easy-peasy-hooks';
import Header from '../components/Header';
import Location from '../assets/coordinate.svg';
import github from '../assets/star.svg';
import Footer from '../components/Footer';

const List = styled.div`
  padding-top: 0.3px;
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 20px;
  row-gap: 20px;
`;
const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
  font-size: 15px;
  text-align: center;
  opacity: 80%;
  margin-top: 0px;
`;
const Img = styled.img`
  width: 3em;
  height: 3em;
`;
const Title = styled.h3`
  padding: 0.6em 1.2em;
  font-size: 1em;
  color: ${(props) => props.theme.text};
`;

const P = styled.p`
  color: ${(props) => props.theme.text};
`;
const Content = styled.div`
  padding-top: 120px;
`;
const Align = styled.div`
  display: flex;
  justify-content: center;
`;
const CircularImage = styled.img`
  height: 8em;
  width: 8em;
  border-radius: 50%;
`;

const H2 = styled.h2`
  color: ${(props) => props.theme.text};
  text-align: center;
`;

function Home() {
  const { data } = useStoreState((state) => state.products);
  const me = useStoreState((state) => state.me);

  return (
    <>
      <Header name={me.name} />
      <Content>
        <Card>
          <H2>About me 💩</H2>
        </Card>
        <Card>
          <CircularImage src={me.imageUrl} />
          <Title>{me.name}</Title>
          <Title>{me.proffesion}</Title>
          <Align>
            <Img src={github} />
            <P>{me.github}</P>
          </Align>
          <Align>
            <Img src={Location} />
            <P>{me.location}</P>
          </Align>

          <P>{me.description}</P>
        </Card>
      </Content>
      <Card>
        <H2>Languages and framework experience</H2>
      </Card>
      <List>
        {data.map((x) => (
          <Card key={x.title}>
            <Img src={x.imageUrl} alt="" />
            <Title>{x.title}</Title>
            <P>{x.description}</P>
          </Card>
        ))}
      </List>
      <Footer />
    </>
  );
}

export default Home;
