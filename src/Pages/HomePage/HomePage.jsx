import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
       <h1>Home Page</h1>
      <p>
        Already a user? <Link to="/login"> Login</Link>
      </p>
      <p>
        New User? <Link to="/register">Register</Link>
      </p>
    </>
  );
}

export default HomePage;
