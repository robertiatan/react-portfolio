import React from "react";
import CustomizedImage from "../utils/Hero";
import "../App.css";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="jumbotron">
            <h1 className="display-4">Hello, world!</h1>
            <CustomizedImage />
            <p className="lead">Welcome to my Portfolio!</p>
            <hr className="my-4" />
            <p>
              If you would like to read more about me, please click on the About
              link in the navigation bar. Otherwise, you could check out my
              portfolio or resume, and even get in touch!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
