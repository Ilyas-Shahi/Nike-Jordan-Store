import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  console.log('layout');
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
