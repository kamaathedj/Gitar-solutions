import Header from '../components/Header';
import { useStoreState } from '../hooks/Easy-peasy-hooks';

function Home() {
  const data = useStoreState((state) => state.data);
  return (
    <>
      <Header name="Gitar solutions">logo here .........</Header>
      <ul className="list">
        {data.map((x) => (
          <>
            <span key={x.title}>{x.description}</span>
            <button type="submit">{x.title}</button>
          </>
        ))}
      </ul>
    </>
  );
}

export default Home;
