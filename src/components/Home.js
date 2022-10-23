import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-5 text-right">
          <Link to="/add" className="btn btn-outline-dark">
            Add contact
          </Link>
        </div>
      </div>
      <div className="col-md-6 mx-auto">
        <h1>Welcome to react redux contact book</h1>
      </div>
    </div>
  );
};

export default Home;
