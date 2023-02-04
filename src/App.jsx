import { Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
