const Footer = () => {
    const imageParamters = {
      minHeight: "83px",
      backgroundColor: "#001055",
      color: "#fff",
      fontSize: "20px",
      fontWeight: "300",
    };

    return(<footer className="text-white"style={imageParamters}>
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-4 my- text-center">
          <img
            src="https://landing.bookster.ro/Content/img/logo-text-inverted.svg"
            alt="Logo"
            className="img-fluid"
            width="197px"
            height="55px"
          />
          <p>We make reading a beloved habit.</p>
          <div></div>
        </div>
        <div className="col">
          <div className="d-flex col justify-content-between px-5">
            <div className="text-white mx-2">EULA Terms</div>
            <div className="text-white mx-2">Contact Us</div>
            <div className="text-white mx-2">Login</div>
            <div className="col-md-4 text-center">
              <div className="d-flex justify-content-center">
                <div className="bi bi-instagram mx-2 h2"></div>
                <div className="bi bi-linkedin mx-2 h2"></div>
                <div className="bi bi-facebook mx-2 h2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
};

export default Footer;