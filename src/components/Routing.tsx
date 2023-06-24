import { Routes, Route } from 'react-router-dom';
import NotFound from '../pages/NotFound';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<h2>home</h2>} />
      <Route path="/product" element={<h2>product</h2>} />
      <Route path="/about" element={<h2>about</h2>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Routing;
