import header from './images/header.svg';
import CreateAccountButton from "./CreateAccountButton";

const Landpage = () => {
    const containerStyle = {
        position: 'relative',        
        backgroundColor: '#4b69ea',
        backgroundPosition: 'center'
      } as React.CSSProperties;
    
      const imageStyle = {
        display: 'flex',
        justifyContent: 'center',
      };
    
      const textOverlayStyle = {
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: '#ffff', 
      } as React.CSSProperties;
    
      return (
        <div style={containerStyle}>
          <img className="d-flex justify-content-center image-fluid object-fit-cover w-100" src={header} alt="header" style={imageStyle} />
          <div style={textOverlayStyle}>
            <h1 className="fw-bold">People from over 1,300 companies from all over Romania are rediscovering the joy of reading with Bookster</h1>
            <CreateAccountButton/>
            <div className="fw-bolder mt-5">Don't have Bookster yet?</div>
            </div>
        </div>
        )
    }

    export default Landpage;