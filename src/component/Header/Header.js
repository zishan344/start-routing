import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Welcome to my fancy website</h1>
      <Link to="/">Home</Link>
      <Link to="/friends">Friend</Link>
      <Link to="/about">About</Link>
    </div>
  );
  /*  return (
    <div>
      <h1>Welcome to my fancy website</h1>
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/friends">Friend</CustomLink>
      <CustomLink to="/about">About</CustomLink>
    </div>
  ); */
};

export default Header;
