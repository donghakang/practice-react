import './App.css';
import { useState } from 'react';
import { Button, Alert, Container, Row, Col, Media } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me y'all!
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
}

function ContainerView() {
  return (
    <div margin='20' align='center'>
      <p><em>Before we start ...</em></p>
      <ul class='list-unstyled' >
        <li><strong>xs</strong> ~ 576px</li>
        <li><strong>sm</strong> ~ 768px</li>
        <li><strong>md</strong> ~ 992px</li>
        <li><strong>lg</strong> ~ 1200px</li>
      </ul>
      <p class="h2">Basic Container</p>
      <Container>
        <Row style={{ backgroundColor: 'pink' }}>
          <Col style={{ backgroundColor: '#f8bbd0' }}>normal container</Col>
        </Row>
      </Container>
      <Container fluid>
        <Row style={{ backgroundColor: 'pink' }}>
          <Col style={{ backgroundColor: '#f48fb1' }}>fluid container</Col>
        </Row>
      </Container>
      <Container fluid='md'>
        <Row style={{ backgroundColor: 'pink' }}>
          {/* md 까지 fluid 가 적용이 된다. */}
          <Col style={{ backgroundColor: '#f06292' }}>breakpoint md fluid</Col>
        </Row>
      </Container>
      <br /><br /><br />
      <p class="h2">Grid Container</p>
      <Container>
        <Row>
          <Col style={{ backgroundColor: '#ffecb3' }}>1 of 2</Col>
          <Col style={{ backgroundColor: '#ffe082' }}>2 of 2</Col>
        </Row>
        <Row>
          <Col style={{ backgroundColor: '#ffd54f' }}>1 of 3</Col>
          <Col style={{ backgroundColor: '#ffca28' }}>2 of 3</Col>
          <Col style={{ backgroundColor: '#ffc107' }}>3 of 3</Col>
        </Row>
      </Container>
      <br />
      <Container>
        <Row>
          <Col xs={8} style={{ backgroundColor: '#f0f4c3' }}>1 of 2</Col>
          <Col style={{ backgroundColor: '#e6ee9c' }}>2 of 2</Col>
        </Row>
        <Row>
          <Col style={{ backgroundColor: '#dce775' }}>1 of 3</Col>
          <Col xs={6} style={{ backgroundColor: '#d4e157' }}>2 of 3</Col>
          <Col style={{ backgroundColor: '#cddc39' }}>3 of 3</Col>
        </Row>
      </Container>
      <br />
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2" style={{ backgroundColor: '#dcedc8' }}>
            1 of 3
          </Col>
          <Col md="auto" style={{ backgroundColor: '#c5e1a5' }}>Variable width content</Col>
          <Col xs lg="2" style={{ backgroundColor: '#aed581' }}>
            3 of 3
          </Col>
        </Row>
        <Row>
          <Col style={{ backgroundColor: '#9ccc65' }}>1 of 3</Col>
          <Col md="auto" style={{ backgroundColor: '#8bc34a' }}>Variable width content</Col>
          <Col xs lg="2" style={{ backgroundColor: '#7cb342' }}>
            3 of 3
          </Col>
        </Row>
      </Container>
      <br />
      <Container>
        <Row>
          <Col sm={8} style={{ backgroundColor: '#a1887f' }}>sm=8</Col>
          <Col sm={4} style={{ backgroundColor: '#8d6e63' }}>sm=4</Col>
        </Row>
        <Row>
          <Col sm style={{ backgroundColor: '#795548' }}>sm=true</Col>
          <Col sm style={{ backgroundColor: '#6d4c41' }}>sm=true</Col>
          <Col sm style={{ backgroundColor: '#5d4037' }}>sm=true</Col>
        </Row>
      </Container>
      <br />
      <p><strong>md='2'</strong> 👉🏻 The number of columns that will fit next to each other on medium devices</p>
      <a href="https://react-bootstrap.github.io/layout/grid/">Grid Layout</a>
    </div>
  )
}

function MediaView() {
  return (
    <>
      <p class="h2">Media Object</p>
      <Media>
        <img
          width={64}
          height={64}
          className="mr-3"
          src="holder.js/64x64"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5>Media Heading</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
            Donec lacinia congue felis in faucibus.
          </p>
        </Media.Body>
      </Media>
      <p class="h3">Media Nesting</p>
      <Media>
        <img
          width={32}
          height={32}
          className="align-self-start mr-3"
          src="holder.js/64x64"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5>Media Heading</h5>
          <p>
            In here, className will change the view of the media object..
            <strong>align-self-start</strong> will align the image to the top (align-self-center, end)
            <strong>mr-3</strong> refers to margin right - 3
          </p>

          <Media>
            <img
              width={32}
              height={32}
              className="mr-3"
              src="holder.js/64x64"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>Media Heading</h5>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                vulputate fringilla. Donec lacinia congue felis in faucibus.
              </p>
            </Media.Body>
          </Media>
        </Media.Body>
      </Media>
      <a href="https://react-bootstrap.github.io/layout/media/">Media Object.</a>
    </>
  )
}

function App() {
  return (
    <>
      <AlertDismissible />
      <ContainerView />
      <MediaView />
      <hr />
      <br /><br /><br />
      <Alert variant='primary'>
        <Alert.Heading>
          Bootstrap 👍🏻
        </Alert.Heading>
        <p>
          There is no right or wrong between <strong>material-ui</strong> and <strong>Bootstrap</strong>.
          Why not just mix them?
          <br />
          But if you consider to use only one, hmm.. if you like responsive web design then use bootstrap. If you want the widgets, use material-ui
          To find more about the bootstrap, click here
        </p>
        <hr />
        {/* <Link to="/signup" className="btn btn-primary">Sign up</Link> */}
        <Button href='https://github.com/' variant="primary">
          Click here to find more about Bootstrap
        </Button>
      </Alert>
    </>
  );
}

export default App;
