import HeroSection from '../components/home/HeroSection';
import LastSections from '../components/home/LastSections';
import PopularSection from '../components/home/PopularSection';
import ShopJordanIcons from '../components/home/ShopJordanIcons';
import JordanHeader from '../components/layout/JordanHeader';

const Home = () => {
  return (
    <>
      <JordanHeader />
      <HeroSection />
      <ShopJordanIcons />
      <PopularSection />
      <LastSections />
    </>
  );
};
export default Home;
