import React from "react";
import home from "../src/images/home.svg";
import Show from "./Show";

const Home = () => {
  return (
    <>
      <Show
        data=" Hello Everyone i'am"
        info="we are the team of telanted developers"
        imgsrc={home}
        visit="/service"
        name=" Mayank Rawat"
        buttonname="Get Started"
        alternate="home img"
      />
    </>
  );
};

export default Home;
