import { Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';
import SingleProduct from './components/shop/SingleProduct';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
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

        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
}

export default App;
