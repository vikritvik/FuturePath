 import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFolderOpen,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#d9f0ff", // soft blue like your image
        paddingTop: "40px",
        paddingBottom: "20px",
      }}
    >
      <div className="container">
        <div className="row text-start text-md-left gy-4">

          {/* Column 1: Logo + Social */}
          <div className="col-12 col-md-3">
            <h4 className="fw-bold">
              FuturePath<span style={{ color: "#5D5FEF" }}>●</span>
            </h4>
            <div className="d-flex gap-3 mt-3">
              <FaFacebookF size={20} />
              <FaTwitter size={20} />
              <FaInstagram size={20} />
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="col-6 col-md-2">
            <h6 className="fw-bold">Links</h6>
            <ul className="list-unstyled mt-2">
              <li>Home</li>
              <li>Courses</li>
              <li>Mentor</li>
              <li>Group</li>
              <li>Testimonial</li>
              <li>Docs</li>
            </ul>
          </div>

          {/* Column 3: Other */}
          <div className="col-6 col-md-2">
            <h6 className="fw-bold">Other</h6>
            <ul className="list-unstyled mt-2">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Career</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="col-12 col-md-5">
            <ul className="list-unstyled mt-4 mt-md-0">
              <li className="mb-3 d-flex align-items-center">
                <FaMapMarkerAlt className="me-2 text-primary" />
                68-196, shyamnagar, Raipur 492001
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FaPhoneAlt className="me-2 text-primary" />
                +91 9695745713, +91 9555498615
              </li>
              <li className="d-flex align-items-center">
                <FaFolderOpen className="me-2 text-primary" />
                infofuturepath95@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4 pt-3 border-top text-muted small">
          <span>
            ©2025 Agency. All Rights Reserved by futurepathedu.in
          </span>
          <div className="d-flex gap-3">
            <span>Privacy policy</span>
            <span>Terms & conditions</span>
            <span>Distributed by ThemeWagon</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
