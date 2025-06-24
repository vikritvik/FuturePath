

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';
import { Bs1CircleFill, Bs1SquareFill, BsCheckCircle } from 'react-icons/bs';
import CourseSlider from '../components/CourseSlider';
import MentorSection from '../components/Mentors';
import './Landing.css'



const Landingpage = () => {
  return (
    <Container className="py-4">
      <Row className='my-5 py-5  '>
        <Col md={6} className='px-4'>
          <BsCheckCircle color='green' size={24} className='my-2 mx-2'></BsCheckCircle>
          <span className='fs-5 '>Best learning method proved</span>
          <h1 className='fw-bold'>Learn Concepts in VR </h1>
          <p className='h4 py-2'>More Immersive and Modern way of Learning.</p>

          <div className="d-flex py-4">
            <div className="input-group" style={{ width: '600px', height: '60px' }}>
              <input
                type="text"
                className="form-control rounded-start-pill ps-4"
                placeholder="search courses..."
                style={{ fontSize: '1.1rem', height: '100%' }}
              />
              <button
                className="btn btn-primary d-flex align-items-center justify-content-center rounded-end-pill"
                type="button"
                style={{
                  width: '60px',
                  height: '100%',
                  borderTopLeftRadius: '0',
                  borderBottomLeftRadius: '0',
                }}
              >
                <FiSearch size={20} color="white" />
              </button>
            </div>
          </div>
          <div className="row text-center justify-content-center mb-3 pb-3">
            {/* Feature 1 */}
            <div className="col-4 d-flex align-items-center justify-content-center gap-2 feature-item">
              <BsCheckCircle className="feature-icon" />
              <span className="feature-text">Flexible</span>
            </div>

            {/* Feature 2 */}
            <div className="col-4 d-flex align-items-center justify-content-center gap-2 feature-item">
              <BsCheckCircle className="feature-icon" />
              <span className="feature-text">Learning path</span>
            </div>

            {/* Feature 3 */}
            <div className="col-4 d-flex align-items-center justify-content-center gap-2 feature-item">
              <BsCheckCircle className="feature-icon" />
              <span className="feature-text">Community</span>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} className="text-center mb-sm-0 mb-md-0">
          <img
            src="/Images/Vrheader.png"
            alt="Learning"
            className="img-fluid rounded"
            width={500}
          />
        </Col>

      </Row>


      <CourseSlider></CourseSlider>
      <MentorSection></MentorSection>
    </Container >

  );
};

export default Landingpage;
