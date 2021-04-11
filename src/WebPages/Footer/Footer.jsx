import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-2">
              <p className="fs-5 text-center mb-0 text-light fw-bold">
                ©Copyright:PukhrajLand,2021
              </p>
              <p className=" lead text-center text-light">
                We are always here for any need.
              </p>
            </div>
            <div className="col-md-6 p-2 mb-3 text-center">
              <a
                className="btn btn-social-icon btn-facebook "
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/pukhraj.khinda"
              >
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a
                className="btn btn-social-icon btn-instagram "
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/pukhraj_76/"
              >
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a
                className="btn btn-social-icon btn-linkedin"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/pukhraj-singh-9245111b6/"
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a
                className="btn btn-social-icon btn-twitter "
                target="_blank"
                rel="noreferrer"
                href="http://twitter.com/"
              >
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a
                className="btn btn-social-icon"
                target="_blank"
                rel="noreferrer"
                href="mailto:pukhrajkhinda@gmail.com"
              >
                <i className="fas fa-envelope fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
