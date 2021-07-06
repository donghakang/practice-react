import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function ProjectComponent() {
  const [project, setProject] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      fetch("/data/project.json")
        .then((res) => res.json())
        .then((res) => setProject(res))
        .then(setIsLoading(false))
        .catch((err) => console.log("cannot fetch a data: ", err));
    };

    fetchData();
  }, []);

  console.log(project);

  return (
    <Container fluid>
      <Row>
        {project.map((item) => (
          <Col md="4" key={item.id} className="project-content">
            <div>
              {item.title}
              <br />
              {item.date}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
