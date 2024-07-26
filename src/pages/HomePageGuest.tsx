import Navbar from '../components/Navbar';
import Landpage from '../components/Landpage';
import LandingLibrary from '../components/LandingLibrary';
import AnimatedSection from '../components/AnimatedSection';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import Customers from '../components/Customers';

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