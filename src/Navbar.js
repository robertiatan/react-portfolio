import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/react-portfolio" className="name">
        【ＲＩ】
      </Link>
      <ul>
        <CustomLink to="/about" className="custom-link" id="navs">
          About Me
        </CustomLink>
        <CustomLink to="/portfolio" className="custom-link" id="navs">
          Portfolio
        </CustomLink>
        <CustomLink to="/contact" className="custom-link" id="navs">
          Contact
        </CustomLink>
        <CustomLink to="/resume" className="custom-link" id="navs">
          Resume
        </CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
