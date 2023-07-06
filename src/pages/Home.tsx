import { styled } from 'styled-components';
import { useStoreState } from '../hooks/Easy-peasy-hooks';
import Header from '../components/Header';

const List = styled.div`
  padding-top: 200px;
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 20px;
  row-gap: 20px;
`;
const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
  font-size: 15px;
  text-align: center;
`;
const Img = styled.img`
  width: 3em;
  height: 3em;
`;
const Title = styled.h3`
  padding: 0.6em 1.2em;
  font-size: 1em;
`;

function Home() {
  const { count, data } = useStoreState((state) => state.products);

  return (
    <>
      <Header name="Developer" count={count}>
        logo here .........
      </Header>
      <List>
        {data.map((x) => (
          <Card key={x.title}>
            <Img src={x.imageUrl} alt="" />
            <Title>{x.title}</Title>
            <p>{x.description}</p>
          </Card>
        ))}
      </List>
    </>
  );
}

export default Home;
