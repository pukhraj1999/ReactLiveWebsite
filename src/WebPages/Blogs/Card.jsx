import { NavLink } from "react-router-dom";
import "./Card.css";

function Card(props) {
  return (
    <>
      <div className="col-md-4 gy-4">
        <div className="card">
          <img
            src={props.imgsrc}
            className="card-img-top"
            alt="..."
            height="250"
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p class="card-text">{props.content.substr(0, 200) + "..."}</p>
            <NavLink
              to="/underconstruction"
              className="btn btn-outline-primary"
            >
              Check More
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
