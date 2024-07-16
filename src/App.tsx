import './App.css';
import Navbar from './Navbar';
import Landpage from './Landpage';
import Footer from './Footer';
import LandingLibrary from './LandingLibrary';
import AnimatedSection from './AnimatedSection';
import Benefits from './Benefits';
import Testimonials from './Testimonials';

function App() {
  return (
    <div>
       <Navbar></Navbar>
      <Landpage></Landpage>
      <LandingLibrary></LandingLibrary>
      <Benefits></Benefits>
      <AnimatedSection></AnimatedSection>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
}

export default App;