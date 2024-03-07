import CampaingImg from './images/img-campaigns.svg';
import ModernImg from './images/img-modern.svg';
import PersonalizedImg from './images/img-personalized.svg';

const LandingLibrary = () => {
    return(
<div className="border-bottom shadow d-flex flex-column align-items-center"  style={{minHeight:'720px', padding: '100px'}}>
      <div className="mb-4">
        <h2 className="text-center fw-bold display-5">What does bookster do?</h2>
        <div className="text-center">First modern platform which brings books closer to people.</div>
      </div>

      <div>
        <table>
          <tbody>
            <tr>
              <td className="text-center py-2">
                <img
                  src={ModernImg}
                  alt="Campaign"
                  className="img-fluid"
                  style={{ width: '250px', height: '250px' }}
                />
              </td>
              <td className="text-center">
                <img
                  src={PersonalizedImg}
                  alt="Modern"
                  className="img-fluid"
                  style={{ width: '250px', height: '250px' }}
                />
              </td>
              <td className="text-center">
                <img
                  src={CampaingImg}
                  alt="Personalized"
                  className="img-fluid"
                  style={{ width: '250px', height: '250px' }}
                />
              </td>
            </tr>
            <tr>
              <td className="col-md-4 text-center">
                <h3 className="fw-bolder">Various <br />libraries</h3>
                <div>You have free access to the best books, articles, and videos.</div>
              </td>
              <td className="col-md-4 text-center">
                <h3 className="fw-bolder">Personalized <br />recommendations</h3>
                <div>You get personalized reading recommendations based on your preferences.</div>
              </td>
              <td className="col-md-4 text-center">
                <h3 className="fw-bolder">Campaign to <br />encourage reading</h3>
                <div>We send you reviews of the best books and promote reading in the community of readers.</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default LandingLibrary;