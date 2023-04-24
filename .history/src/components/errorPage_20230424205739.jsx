import React from "react";
import { Link } from "react-router-dom";
import Error from "../assets/img/404-error.png";

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="notFound--container">
        <img src={Error} alt="404 Error" className="notFound--container__img" />
      </div>
      <h2 className="notFound--msg">
        Sorry, the page you are looking for does not exist.
      </h2>
      <div className="notFound--back">
        You can always go back to the
        <Link to="/" className="notFound--back__link">
          {" "}
          Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;