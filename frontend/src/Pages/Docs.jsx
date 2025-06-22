
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Ananya Singh",
    docTitle: "React Crash Course",
    rating: 5,
    comment: "Very well explained! Helped me build my first app.",
  },
  {
    id: 2,
    name: "Rohit Mehta",
    docTitle: "AI Basics",
    rating: 4,
    comment: "Good content, some parts could be more detailed.",
  },
  {
    id: 3,
    name: "Sanya Kapoor",
    docTitle: "Backend with Node.js",
    rating: 5,
    comment: "Best backend tutorial I’ve come across. Highly recommend!",
  },
  {
    id: 4,
    name: "Aman Verma",
    docTitle: "Tailwind CSS Guide",
    rating: 3,
    comment: "Decent, but I prefer video-based content.",
  },
];

const DocsReviews = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">📄Student Reviews</h2>
      <Row>
        {reviews.map((review) => (
          <Col md={6} lg={4} key={review.id} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title className="fw-bold">{review.docTitle}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  By {review.name}
                </Card.Subtitle>
                <div className="mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      color={i < review.rating ? "#fbc02d" : "#e0e0e0"}
                    />
                  ))}
                </div>
                <Card.Text>"{review.comment}"</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DocsReviews;
