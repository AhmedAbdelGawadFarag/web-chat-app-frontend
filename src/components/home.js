import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Link to="/login">log in</Link>
      <Link to="/users/new">sign up</Link>
    </div>
  );
};
export default Home;