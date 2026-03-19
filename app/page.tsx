import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Discover from './components/Discover';
import Stats from './components/Stats';
import Brand from './components/Brand';
import Pricing from './components/Pricing';
import ListCTA from './components/ListCTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="page">
      <Header />
      <Hero />
      <Features />
      <Stats />
      <Discover />
      <Brand />
      <Pricing />
      <ListCTA />
      <Footer />
    </div>
  );
}
