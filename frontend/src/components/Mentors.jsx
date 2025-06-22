 import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

const mentors = [
  {
    name: "Vikas Ritvik",
    image: "/images/mentor1.jpg",
  },
  {
    name: "Ankit",
    image: "/images/mentor2.jpg",
  },
  {
    name: "Sonia James",
    image: "/images/mentor3.jpg",
  },
];

export default function MentorSection() {
  return (
    <section
      style={{
        backgroundColor: "#d9f0ff", // matches the blue in your image
        padding: "60px 0",
        textAlign: "center",
      }}
    >
      <div className="container">
        <h2 className="fw-bold mb-5">Meet with our mentor.</h2>
        <div className="row justify-content-center">
          {mentors.map((mentor, index) => (
            <div className="col-12 col-sm-6 col-md-4 mb-5" key={index}>
              <div style={{ position: "relative", display: "inline-block" }}>
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="rounded-circle border border-white shadow"
                  style={{ width: "160px", height: "160px", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: "40px",
                    height: "40px",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <FaLinkedinIn color="#5D5FEF" />
                </div>
              </div>
              <h5 className="mt-3 fw-semibold">{mentor.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
