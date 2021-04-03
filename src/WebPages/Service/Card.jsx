import { NavLink } from "react-router-dom";

function Card(props) {
  return (
    <>
      <div className="col-md-4 gy-3">
        <div className="card">
          <img
            src={props.imgsrc}
            className="card-img-top"
            alt="..."
            height="250"
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="/underconstruction" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
