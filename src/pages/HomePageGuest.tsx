import Navbar from '../components-guest/Navbar';
import Landpage from '../components-guest/Landpage';
import LandingLibrary from '../components-guest/LandingLibrary';
import AnimatedSection from '../components-guest/AnimatedSection';
import Benefits from '../components-guest/Benefits';
import Testimonials from '../components-guest/Testimonials';
import Customers from '../components-guest/Customers';

const HomePage = () => {
  return (
    <>
        <Navbar></Navbar>
        <Landpage></Landpage>
        <LandingLibrary></LandingLibrary>
        <Benefits></Benefits>
        <AnimatedSection></AnimatedSection>
        <Testimonials></Testimonials>
        <Customers></Customers>
        {/* <Footer></Footer> component is in MainLayout.tsx which will appear on all pages*/}
    </>
  )
}

export default HomePage