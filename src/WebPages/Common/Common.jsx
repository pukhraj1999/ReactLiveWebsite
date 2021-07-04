import "./Common.css";
import { NavLink } from "react-router-dom";

function Common(props) {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>
                {props.name} <strong className="brand-name">PukhrajHere</strong>
              </h1>
              <h2 className="fs-3 my-3 lead">{props.content}</h2>
              <p className="my-3 lead mt-0">{props.subContent}</p>
              <div className="mt-3">
                <NavLink
                  to={props.visit}
                  className="btn btn-outline-primary fw-bold border-1 rounded-pill"
                >
                  {props.btnName}
                </NavLink>
              </div>
            </div>
            <div className="col-md-6 order-1 order-lg-2 header-img">
              <img src={props.imgsrc} className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;
