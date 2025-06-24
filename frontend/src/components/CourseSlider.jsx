
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import { BsBook, BsPeople } from "react-icons/bs";
import "swiper/css";
import "swiper/css/pagination";
import "./CourseSlider.css"

const courses = [
    {
        title: "Coding for kids",
        author: "Vikas Ritvik",
        Mode: "Online live class",
        rating: 5,
        price: "5000Rs",
        students: 120,
        classes: 25,
        image: "/images/courseone.png", // replace with actual path
        bestSeller: true,
    },

    {
        title: "German language classes",
        author: "Sonia James",
        Mode: "Online live class",
        rating: 5,
        price: "10,000Rs per level",
        students: 150,
        classes: 40,
        image: "/images/german.jpg",
        bestSeller: true,
    },
    {
        title: "Master Chatgpt & Gemini",
        author: "Vikas Ritvik",
        Mode: "Online live class",
        rating: 5,
        price: "2000Rs",
        students: 150,
        classes: 10,
        image: "/images/chatgpt1.jpg",
        bestSeller: true,
    },
    // Add more courses as needed
];

export default function CourseSlider() {
    return (
        <div className="container py-5 ">
            <header className="text-center mb-5">
                <h1 className="display-4 fw-bold">Our Courses</h1>
            </header>

            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {courses.map((course, idx) => (
                    <SwiperSlide key={idx} >
                        <div className="card shadow-sm border-0 rounded-4 overflow-hidden " style={{ width: '100%', height: '500px' }}>
                            <div className="position-relative ">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="card-img-top"
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                {course.bestSeller && (
                                    <span className="position-absolute bottom-0 end-0 m-3 px-3 py-1 bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold small" style={{ width: 80, height: 80 }}>
                                        BEST<br />SELLER
                                    </span>
                                )}
                            </div>
                            <div className="card-body py-2 ">
                                <h5 className="card-title fw-bold">{course.title}</h5>
                                <p className="text-muted-dh">{course.author}</p>
                                <h5 className="text-muted-dd">{course.Mode}</h5>
                                <div className="py-5 my-5">
                                    <div className="d-flex align-items-center">
                                        <span className="text-danger fw-bold me-2 text-span">{course.rating}</span>
                                        {Array(5).fill().map((_, i) => (
                                            <FaStar key={i} className="text-warning me-1" />
                                        ))}
                                        <span className="ms-auto fw-bold fs-md-2 fs-5">{course.price}</span>
                                    </div>
                                    <div className="d-flex text-muted justify-content-between mt-2 pt-2 border-top">
                                        <span><BsBook className="me-1" /> {course.classes} classes</span>
                                        <span><BsPeople className="me-1" /> {course.students} students</span>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
