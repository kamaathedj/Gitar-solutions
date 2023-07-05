import { useStoreActions, useStoreState } from '../hooks/Easy-peasy-hooks';
import Header from '../components/Header';

function Home() {
  const { count, data } = useStoreState((state) => state.products);
  const { ChangeMode } = useStoreActions((state) => state.theme);
  return (
    <>
      <Header name="Gitar solutions" count={count}>
        logo here .........
      </Header>
      <ul className="list">
        {data.map((x) => (
          <>
            <li key={x.title}>{x.description}</li>
            <button type="submit">{x.title}</button>
          </>
        ))}
      </ul>
      <button type="submit" onClick={ChangeMode}>
        {' '}
        change to mode
      </button>
    </>
  );
}

export default Home;
