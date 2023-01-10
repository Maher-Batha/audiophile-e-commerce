import React from "react";
import { Link } from "react-router-dom";
import { SinglePageTitle } from "../components";

const ErrorPage = () => {
  return (
    <>
      <SinglePageTitle />
      <section className="error-page">
        <div className="container">
          <div className="image">
            <img src="/images/404.svg" alt="error" />
          </div>
          <div className="info">
            <h1>opps, page not found</h1>
            <p>
              sorry, the page you are looking for does not exist. if you think
              something is broken, report a problem
            </p>
            <Link to="/">
              <button>home</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
