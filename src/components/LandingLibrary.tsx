import CampaingImg from '../images/homeGuestPage/img-campaigns.svg';
import ModernImg from '../images/homeGuestPage/img-modern.svg';
import PersonalizedImg from '../images/homeGuestPage/img-personalized.svg';

const LandingLibrary = () => {
    return(
<div className="border-bottom shadow d-flex flex-column align-items-center"  style={{minHeight:'720px', padding: '100px'}}>
      <div className="mb-4">
        <h2 className="text-center fw-bold display-5">What does bookster do?</h2>
        <div className="text-center fs-5">First modern platform which brings books closer to people.</div>
      </div>
<div className="container text-center">
 
      <div className="row">
      <div className="col-lg-4">
      <img
                  src={ModernImg}
                  alt="Campaign"
                  className="img-fluid"
                  style={{ width: '250px', height: '250px' }}
                />
                        <h2 className="fw-bolder">Various <br />libraries</h2>
        <p className='fs-5 mt-4'>You have free access to the best books, articles, and videos.</p>
      </div>
      <div className="col-lg-4">
      <img
                  src={PersonalizedImg}
                  alt="Modern"
                  className="img-fluid"
                  style={{ width: '250px', height: '250px' }}
                />        <h2 className="fw-bolder">Personalized <br />recommendations</h2>
        <p className='fs-5 mt-4'>You get personalized reading recommendations based on your preferences.</p>
      </div>
      <div className="col-lg-4">
      <img
                  src={CampaingImg}
                  alt="Personalized"
                  className="img-fluid"
                  style={{ width: '250px', height: '250px' }}
                />        <h2 className="fw-bolder">Campaign to <br />encourage reading</h2>
        <p className='fs-5 mt-4'>We send you reviews of the best books and promote reading in the community of readers.</p>
      </div>
      </div>
      
    </div>
    </div>
    );
};

export default LandingLibrary;