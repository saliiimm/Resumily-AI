import Navbar from '../components/NavBar/Navbar';
import IntroSection from '../components/HomeSections/IntroSection';
import ExamplesSection from '../components/HomeSections/ExamplesSection';
import Features from '../components/HomeSections/Features';
import Footer from '../components/footer/Footer';
import '../index.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <IntroSection />
      <ExamplesSection />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
