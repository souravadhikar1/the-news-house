import React, { useState } from "react";
import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password, photo);

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // for terms
  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <Container className="mx-auto w-25 ">
      <h3 className="fw-semibold text-info ">Please Register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label className="fw-semibold">Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="photo">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Enter Your Photo"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-info fw-semibold">Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter Email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-semibold text-warning">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleAccepted}
            type="checkbox"
            name="accept"
            label={
              <>
                Accept <Link to="/terms">Terms and Conditions</Link>{" "}
              </>
            }
          />
        </Form.Group>

        <Button variant="primary" disabled={!accepted} type="submit">
          Register
        </Button>
        <br />
        <Form.Text className="text-secondary">
          You Already Have an Account?
          <Link to="/login" className="text-danger">
            Please Login
          </Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
