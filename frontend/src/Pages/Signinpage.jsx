 // src/pages/SignInPage.jsx
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignInPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://futurepath-backend.onrender.com/api/signin", form);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard"); // or any protected route
    } catch (err) {
      alert("Login failed: " + err.response?.data?.message || "Unknown error");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="shadow-sm p-4 rounded"
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "#fff",
          border: "1px solid #eee",
        }}
      >
        <h3 className="text-center fw-bold mb-2">Welcome back</h3>
        <p className="text-center text-muted mb-4">
          Choose your preferred sign in method
        </p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button
            variant="dark"
            type="submit"
            className="w-100 mb-3"
          >
            Sign in with Email
          </Button>
        </Form>
        <div className="text-center text-muted mb-3">or</div>
        <Button
          variant="light"
          className="w-100 border d-flex align-items-center justify-content-center"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            height="18"
            className="me-2"
          />
          Sign in with Google
        </Button>
        <div className="text-center mt-3">
          <small className="text-muted">
            Don't have an account?{" "}
            <a href="/signup" className="text-decoration-none">
              Sign Up
            </a>
          </small>
        </div>
      </div>
    </Container>
  );
}
