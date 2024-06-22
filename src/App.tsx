import './App.css';
import Navbar from './Navbar';
import Landpage from './Landpage';
import Footer from './Footer';
import LandingLibrary from './LandingLibrary';
import AnimatedSection from './AnimatedSection';

function App() {
  return (
    <div>
       <Navbar></Navbar>
      <Landpage></Landpage>
      <LandingLibrary></LandingLibrary>
      <AnimatedSection></AnimatedSection>
      <Footer></Footer>
    </div>
  );
}

export default App;