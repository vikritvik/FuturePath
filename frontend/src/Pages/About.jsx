
import React from "react";

function About() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fs-1 fw-bold">About FuturePath</h1>
        <p className="lead text-muted fs-4 fw-bold">
          Empowering learners to discover their future in tech, AI, and innovation.
        </p>
      </div>

      <div className="row align-items-center">
        <div className="col-md-6 mb-4">
          <img
            src="/Images/Vreducation.jpeg"
            alt="FuturePath mission"
            className="img-fluid rounded shadow"
            width={500} height={300}
          />
        </div>
        <div className="col-md-6">
          <h3 className="fs-2 fw-bold">Our Mission</h3>
          <p className="fs-5">
            At FuturePath, our mission is to make cutting-edge tech education accessible, engaging,
            and career-focused. We believe VR is the future of education And our mission is to make
            classes more engaging, immersive and Practical based not only Theoretical.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-4 text-center">
          <h5 className="fw-bold">Expert Instructors</h5>
          <p>Learn from industry professionals and AI experts.</p>
        </div>
        <div className="col-md-4 text-center">
          <h5 className="fw-bold">Real-World Projects</h5>
          <p>Build a portfolio with guided, practical experience.</p>
        </div>
        <div className="col-md-4 text-center">
          <h5 className="fw-bold">Career Support</h5>
          <p>Get mentorship, resume help, and job-ready skills.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
