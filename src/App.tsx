import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import SplashScreen from './components/SplashScreen';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Packages from './pages/Packages';
import Destinations from './pages/Destinations';
import DestinationDetail from './pages/DestinationDetail';
import Services from './pages/Services';

// Placeholder components for the other routes
const Placeholder = ({ title }: { title: string }) => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-24">
    <h1 className="text-4xl md:text-5xl font-display text-brand-dark mb-4">{title}</h1>
    <p className="text-brand-text max-w-lg">This page is currently under construction. Check back soon for amazing Kashmir travel experiences!</p>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SplashScreen />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Placeholder title="About Us" />} />
          <Route path="services" element={<Services />} />
          <Route path="packages" element={<Packages />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="destinations/:id" element={<DestinationDetail />} />
          <Route path="activities" element={<Placeholder title="Activities & Experiences" />} />
          <Route path="transport" element={<Placeholder title="Transport Services" />} />
          <Route path="hotels" element={<Placeholder title="Hotel & Houseboat Booking" />} />
          <Route path="guide" element={<Placeholder title="Kashmir Travel Guide" />} />
          <Route path="blog" element={<Placeholder title="Travel Blog" />} />
          <Route path="testimonials" element={<Placeholder title="Testimonials & Reviews" />} />
          <Route path="gallery" element={<Placeholder title="Gallery" />} />
          <Route path="faqs" element={<Placeholder title="FAQs" />} />
          <Route path="contact" element={<Contact />} />
          <Route path="planner" element={<Placeholder title="Custom Tour Planner" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
