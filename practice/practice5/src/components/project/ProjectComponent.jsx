import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";

const ProjectContent = (props) => {
  const { item } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className="col-md-4 w-100 project-content"
        onClick={handleShow}
        onPointerOver={() => console.log("hello")}
      >
        {item.title}
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, you're reading this text in a modal!Woohoo, you're reading
          this text in a modal!Woohoo, you're reading this text in a
          modal!Woohoo, you're reading this text in a modal!Woohoo, you're
          reading this text in a modal!Woohoo, you're reading this text in a
          modal!Woohoo, you're reading this text in a modal!Woohoo, you're
          reading this text in a modal!Woohoo, you're reading this text in a
          modal!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Link
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

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

  return (
    <Container fluid>
      <Row>
        {project.map((item) => (
          <ProjectContent key={item.id} item={item} />
        ))}
      </Row>
    </Container>
  );
}
