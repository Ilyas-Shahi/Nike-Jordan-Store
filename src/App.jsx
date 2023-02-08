import { Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';
import SingleProduct from './components/shop/SingleProduct';
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop">
          <Route index element={<Shop />} />
          <Route path=":id" element={<SingleProduct />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
