import header from './images/header.svg';
import CreateAccountButton from "./CreateAccountButton";

const Landpage = () => {
    const containerStyle = {
        position: 'relative',        
        backgroundColor: '#4b69ea',
        backgroundPosition: 'center',
        backgroundImage: `url(${header})`, // Background image
        backgroundSize: 'cover',
        height: '650px', // Increase the height of the background
        paddingTop: '20px', // Default padding top
        paddingBottom: '20px', // Default padding bottom
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#ffffff',
      } as React.CSSProperties;
    

    
      const textOverlayStyle = {
        transform: 'translate( 0%, -30%)', // Adjust the vertical position of the paragrap
        textAlign: 'center',
        color: '#ffff', 
      } as React.CSSProperties;
    
      return (
        <>
        <div className="container-fluid" style={containerStyle}>
          <div className="p-5 mb-4 lc-block col-xxl-7 col-lg-8 col-12" style={textOverlayStyle}>
            <div className="lc-block col-md-8 mx-auto">
            <div className="justify-content-center">
            <p className="text-center fw-bold fs-2">People from over 1,300 companies from all over Romania are rediscovering the joy of reading with Bookster</p>
            </div>
            </div>
            <CreateAccountButton/>
            <div className='text-center mt-5'>
            <a className="fw-bolder mt-5 text-light">Don't have Bookster yet?</a>
            </div>
            </div>
        </div>
        </>
        )
    }

    export default Landpage;