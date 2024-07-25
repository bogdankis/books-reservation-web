import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';

// Importing logo images
import logo1 from '../images/logos/banca-transilvania.png';
import logo2 from '../images/logos/kaufland.png';
import logo3 from '../images/logos/ing.png';
import logo4 from '../images/logos/bosch-cluj.png';
import logo5 from '../images/logos/emag.png';
import logo6 from '../images/logos/emerson.png';
import logo7 from '../images/logos/accenture.png';
import logo8 from '../images/logos/regina-maria.png';
import logo9 from '../images/logos/vodafone.png';
import logo10 from '../images/logos/orange.png';
import logo11 from '../images/logos/bcr-bank.png';
import logo12 from '../images/logos/alpha-bank.png';
import logo13 from '../images/logos/autoliv.png';
import logo14 from '../images/logos/rompetrol.png';
import logo15 from '../images/logos/ernst-young.png';
import logo16 from '../images/logos/stefanini.png';
import logo17 from '../images/logos/molson-coors.png';
import logo18 from '../images/logos/unicredit-bank.png';
import logo19 from '../images/logos/hp.png';
import logo20 from '../images/logos/sap.png';
import logo21 from '../images/logos/porsche-bank.png';
import logo22 from '../images/logos/cemacon.png';

// Array of logos
const logos = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,
  logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19,
  logo20, logo21, logo22
];

// Styles for the container div
const containerStyle: React.CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '40px 0',
  backgroundColor: '#fff'
};

// Styles for the content div
const contentStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '1200px',
  textAlign: 'center',
  position: 'relative'
};

// Styles for the title
const titleStyle: React.CSSProperties = {
  marginBottom: '40px',
  fontWeight: 'bold',
  fontSize: '24px',
  color: '#062462'
};

// Styles for the Swiper component
const swiperStyle: React.CSSProperties = {
  padding: '0 40px', // Add padding for navigation arrows
};

// Navigation styles
const navigationStyle = {
  '--swiper-navigation-size': '25px',
  '--swiper-navigation-color': '#FF6B6B',
  '--swiper-navigation-sides-offset': '10px',
} as React.CSSProperties;

const Customers = () => {
  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h2 style={titleStyle}>Our Partners</h2>
        <Swiper
          modules={[Navigation, Grid]} // Add navigation and grid modules
          navigation // Enable navigation
          spaceBetween={20} // Space between slides
          slidesPerView={7} // Number of slides per view
          grid={{
            rows: 1,
            fill: 'row'
          }}
          breakpoints={{
            // Responsive breakpoints for different screen sizes
            320: {
              slidesPerView: 3,
              grid: { rows: 10 }
            },
            768: {
              slidesPerView: 5,
              grid: { rows: 1 }
            },
            1024: {
              slidesPerView: 7,
              grid: { rows: 1 }
            }
          }}
          style={{ ...swiperStyle, ...navigationStyle }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <img 
                src={logo} 
                alt={`Logo ${index + 1}`} 
                className="logo-image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style>{`
        .logo-image {
          width: 120px;
          height: 120px;
          object-fit: contain;
          box-shadow: 8px 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          margin: 10px;
        }
        @media (max-width: 768px) {
          .logo-image {
            width: 100px;
            height: 100px;
          }
        }
      `}</style>
    </div>
  );
}

export default Customers;
