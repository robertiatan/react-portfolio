import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialLinks() {
  return (
    <div class="social-links">
      <a
        href="https://www.linkedin.com/in/robertiatan/"
        className="linkedin social"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://github.com/robertiatan" className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a
        href="https://stackoverflow.com/users/20000340/robert-alexander-iatan"
        className="stackoverflow social"
      >
        <FontAwesomeIcon icon={faStackOverflow} size="2x" />
      </a>
    </div>
  );
}
