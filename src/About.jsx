import React from "react";
import about from '../src/images/about.svg';
import Show from './Show';

const About = () => {
  return (
    <>
      <Show
        data=" Welcome to the"
        info="we are the team of talented developers"
        imgsrc={about}
        visit="/contact"
        name=" About"
        buttonname="Contact Us"
        alternate="about img"
      />
    </>
  );
};

export default About;
