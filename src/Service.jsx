import React from "react";
import Card from "./Card";
import Data from './Data';

const Service = () => {
  return (
    <>
      <div className="my-3">
        <h1 className="text-center"> Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              {
                  Data.map((ele,idx)=>{
                      return <Card
                        key={idx}
                        imgsrc={ele.imgsrc}
                        title={ele.title}
                      />
                  })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
