import React from "react";
import Image from "react-bootstrap/Image";

function Hero() {
  return (
    <Image
      src="me.jpg"
      alt="Robert"
      className="hero"
      fluid={true}
      roundedCircle={true}
      thumbnail={true}
      style={{ maxWidth: "30%", margin: "30px"}}
    />
  );
}

export default Hero;
