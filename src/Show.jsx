import React from "react";
import { NavLink } from "react-router-dom";

const Show = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.data}
                    <strong className="brand-name">{props.name}</strong>
                  </h1>
                  <h2 className="my-3">
                    {props.info}
                  </h2>
                  <div className="my-3">
                    <NavLink
                      to={props.visit}
                      target="_blank"
                      className="btn btn-get-started"
                    >
                      {props.buttonname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2">
                  <img
                    src={props.imgsrc}
                    alt={props.altternate}
                    className="header-img animated"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Show;
