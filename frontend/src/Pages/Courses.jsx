
// src/pages/Courses.jsx
import React from 'react';

const courses = [
  {
    title: "German",
    description: "Learn German from A1 to B2 .",
    image: "/images/german.jpg"
  },
  {
    title: "Coding for kids",
    description: "Master Photoshop, Illustrator, and UI/UX design skills.",
    image: "/images/coding.jpg"
  },
  {
    title: "Chatgpt & Gemini",
    description: "Get hands-on with Python, ML models, and real AI projects.",
    image: "/images/chatgpt1.jpg"
  },
  {
    title: "Content Creation",
    description: "Explore data analysis, visualization, and machine learning.",
    image: "/images/content-creation.webp"
  }
];

export default function Courses() {
  return (
    <div className="container py-5">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold">Our Courses</h1>
        <p className="lead fw-normal fs-3">Explore our career-focused learning programs.</p>
      </header>

      <div className="row">
        {courses.map((course, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={course.image} className="card-img-top" alt={course.title} />
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
              </div>
              <div className="card-footer bg-transparent border-0">
                <button className="btn btn-primary w-100">Enroll Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
