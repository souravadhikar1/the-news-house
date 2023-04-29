import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="text-center mt-5 border rounded-4 bg-info.bg-gradient">
      <Container>
        <h2 className="fw-bold text-warning">Our Terms and Condition</h2>
        <p className="fw-semibold text-info">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus,
          eveniet dolores beatae nam possimus quibusdam minima sed aut
          cupiditate optio.
        </p>
        <p className="fw-semibold text-success">
          Go back to <Link to="/register">Register</Link>
        </p>
      </Container>
    </div>
  );
};

export default Terms;
