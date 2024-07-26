import bgLogin from '../images/bg-login.png';
import header from '../images/login-header.svg';


const LoginPage = () => {
  return (
<div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundImage: `url(${bgLogin})`, backgroundSize: 'cover' }}
    >
      <div className="w-100 row justify-content-center">
        <div className="col-xs-12 col-md-6 col-lg-4 mx-auto">
          <div className="card p-4 shadow" style={{ borderRadius: '10px' }}>
            <div className="card-body">
              <div className="text-center mb-4">
                <img src={header} alt="Bookster Logo" style={{ width: '150px' }} />
              </div>
              <h5 className="text-center mb-4">Access account</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="formEmail" className="form-label">
                    <i className="bi bi-envelope"></i> E-mail
                  </label>
                  <input type="email" className="form-control" id="formEmail" placeholder="E-mail" />
                </div>
                <div className="mb-3">
                  <label htmlFor="formPassword" className="form-label">
                    <i className="bi bi-lock"></i> Password
                  </label>
                  <input type="password" className="form-control" id="formPassword" placeholder="Parola" />
                </div>
                <div className="mb-3 text-end">
                  <a href="#" className="text-decoration-none">Forgot passowrd?</a>
                </div>
                <button type="submit" className="btn btn-success w-100">Login</button>
              </form>
              <div className="mt-3 text-center">
                <p>Dont' have an account? <a href="#" className="text-decoration-none">Create account</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage