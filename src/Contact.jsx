import React, { useState } from "react";

const Contact = () => {

  let [data,setData]=useState({
    name:"",
    email:"",
    phone:"",
    message:""
  });

  let inputdata=(e)=>{
    let name=e.target.name;
    let value=e.target.value;

    setData((preval)=>{
      return{
            ...preval,[name]:value,
      };
    });
  };

  let formSubmit=(e)=>{
    e.preventDefault();
    alert(`My name is: ${data.name}, my email is: ${data.email}, my phone no is: ${data.phone}, and i have a query:${data.message}`);
    
  }
  return (
    <>
      <div className="my-3">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="name"
                  value={data.name}
                  onChange={inputdata}
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputdata}
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Phone No
                </label>
                <input
                  type="Number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={inputdata}
                  placeholder="Enter your Phone No"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Any Query ?
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="message"
                  value={data.message}
                  onChange={inputdata}
                  rows="3"
                ></textarea>
              </div>
              <div className="col-md-12">
              <button type="submit" className="btn btn-outline-dark my-3">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
