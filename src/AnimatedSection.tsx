import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AnimatedSection = () => {
  const targets = [190, 1355, 7, 130, 12, 94];

  useEffect(() => {
    AOS.init();
  }, []);

  const containerStyle: React.CSSProperties = {
    // marginTop: '50px',
    backgroundColor: '#4B69EA',
    color: '#fff',
    // backgroundImage: `url(${require('./images/section_header.svg').default})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px'
  };

  const rowStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '30px 50px',
    fontSize: '30px'
  };

  const colStyle: React.CSSProperties = {
    marginTop: '10px',
    fontWeight: 'bold',
    flexDirection: 'column'
  };

  const ulStyle: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: 'normal',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <div style={containerStyle}>
      <h1 className="text-center fw-bold">Bookster in digits</h1>
      <div className="row text-center">
        <div style={rowStyle} data-aos="zoom-in">
          <div style={colStyle}>
            {targets[0] + 'K'}
            <ul style={ulStyle}>Readers</ul>
          </div>
          <div style={colStyle}>
            {targets[1]}
            <ul style={ulStyle}>Companies</ul>
          </div>
          <div style={colStyle}>
            {targets[2] + 'M'}
            <ul style={ulStyle}>Borrows</ul>
          </div>
          <div style={colStyle}>
            {targets[3]}
            <ul style={ulStyle}>Lectures</ul>
          </div>
          <div style={colStyle}>
            {targets[4]}
            <ul style={ulStyle}>Lectures read on <br /> average per year <br /> by each reader</ul>
          </div>
          <div style={colStyle}>
            {targets[5]}
            <ul style={ulStyle}>Net promoter score</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedSection;
