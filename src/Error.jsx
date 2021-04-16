import React from "react";
import img from "../src/images/404.svg";

const Error = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="col-md-12 error">
              <img src={img} alt="404 error" className="error-img" style={{width:"100%"}} />
              <br/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
