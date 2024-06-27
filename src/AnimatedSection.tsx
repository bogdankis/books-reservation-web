import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import sectionHeader from './images/section_header.svg';

const AnimatedSection = () => {
  const title = 'Bookster in numbers';
  const targets = [190 + 'K', 1355, 7 + 'M', 130 + 'K', 12, 94];
  const labels = ['Readers', 'Companies', 'Borrows', 'Lectures', 'Lectures read on average per year by each reader', 'Net promoter score'];

  const [containerHeight, setContainerHeight] = useState('900px'); // Default height for desktop view

  useEffect(() => {
    AOS.init();
    updateHeight(); // Initial call to set height on mount

    // Event listener for window resize
    window.addEventListener('resize', updateHeight);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  const updateHeight = () => {
    if (window.innerWidth <= 768) {
      setContainerHeight('1400px'); // Mobile view height
    } else {
      setContainerHeight('700px'); // Desktop view height
    }
  };

  const containerStyle: React.CSSProperties = {
    backgroundColor: '#4B69EA',
    color: '#fff',
    backgroundImage: `url(${sectionHeader})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: containerHeight,
    width: '100%',
    position: 'relative', // Ensure positioning context for absolute positioning of the image
    overflow: 'hidden' // Prevent content overflow
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '48px',
    marginBottom: '10px',
    color: '#fff',
    textAlign: 'center',
    paddingTop: '40px',
  };

  const statStyle: React.CSSProperties = {
    padding: '10px',
    fontSize: '22px',
    marginTop: '1px', // Adjusted margin top for better spacing on desktop
    marginBottom: '1px' // Reduced margin bottom for closer spacing
  };

  const imageStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    zIndex: -1 // Ensure the image stays behind the content
  };

  return (
    <div className="container-fluid py-7 transparent-bg" style={containerStyle}>
      <div className="container">
        <div className="fw-bold text-center" style={titleStyle}>
          {title}
        </div>
        <div className="row row-cols-1 row-cols-md-6 g-4 text-center transparent-bg pt-5" data-aos="zoom-in">
          {labels.map((label, index) => (
            <div className="col" key={index}>
              <div style={statStyle}>
                <span className="fw-bold display-5 mb-5">{targets[index]}</span>
                <div>{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img src={sectionHeader} alt="Section Header" style={imageStyle} />
    </div>
  );
};

export default AnimatedSection;
