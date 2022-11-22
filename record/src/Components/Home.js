
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';



const Home = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const navigateAbout = () => {
    navigate('/about')
  }
  const navigateInsuranceDocumentaion = () => {
    navigate('/insurance')
  }

  return (
    <div style={{
      backgroundImage: `url("./d9.jpeg")`
    }}>
      <Container>
        <Navbar expand="lg" variant="dark" bg="dark">
          <Container>
            <Navbar.Brand href="#">Insurance Book</Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
      <br /><br />
      <Container>
        <Row md={3}>
          <Col>
            <Card style={{ width: '22rem' }} className="card-design">
              <Card.Img variant="top" src="./enquiry.webp"
                height="160px"

              />
              <Card.Body>
                <Card.Title>Enquiry</Card.Title>
                <Card.Text>
                  Enquiry is the find the details of the customer to fill the enquiry form.
                </Card.Text>
              </Card.Body>
              <Card.Body>

                <Button variant="primary" onClick={handleShow}>Enquiry</Button>
              </Card.Body>
            </Card>
            <br />
          </Col>
          <Col xs={6}>
            <Card style={{ width: '22rem' }}>
              <Card.Img variant="top" src="in.jpeg"
                height="160px"
              />
              <Card.Body>
                <Card.Title>Insurance</Card.Title>
                <Card.Text>
                  Insurance provide the list of records and search bar button from.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Button variant="primary" onClick={navigateInsuranceDocumentaion}>Life Insurance</Button>
              </Card.Body>
            </Card>
            <br />

          </Col>
          <Col>
            <Card style={{ width: '22rem' }}>
              <Card.Img variant="top" src="ad.jpeg"
                height="160px"
              />
              <Card.Body>
                <Card.Title>Admin</Card.Title>
                <Card.Text>
                  Admin can login the page form  and signup page form.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Button variant="primary" href='/adminlogin'>Login</Button>&nbsp;&nbsp;&nbsp;
                <Button variant="primary" href='/adminsignup'>SignUp</Button>&nbsp;&nbsp;&nbsp;
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
      <Container>
        <Row md={3}>
          <Col>
            <Card style={{ width: '22rem' }}>
              <Card.Img variant="top" src="bussiness.jpeg"
                height="160px"
              />
              <Card.Body>
                <Card.Title>Business</Card.Title>
                <Card.Text>
                  Audits provide the list of records and search bar button from.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Button variant="primary" href='/businesslogin'>Login</Button>&nbsp;&nbsp;&nbsp;
                <Button variant="primary" href='/businesssignup'> SignUp</Button>&nbsp;&nbsp;&nbsp;
              </Card.Body>
            </Card>
            <br />
          </Col>
          <Col xs={6}>
            <Card style={{ width: '22rem' }}>
              <Card.Img variant="top" src="support.jpeg"
                height="160px"
              />
              <Card.Body>
                <Card.Title>Operation Support</Card.Title>
                <Card.Text>
                  Audits provide the list of records and search bar button from.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Button variant="primary" href='/supportlogin'>Login</Button>&nbsp;&nbsp;&nbsp;
                <Button variant="primary" href='/supportsignup'> SignUp</Button>&nbsp;&nbsp;&nbsp;
              </Card.Body>
            </Card>
            <br />
          </Col>
          <Col>
            <Card style={{ width: '22rem' }}>
              <Card.Img variant="top" src="aduit.jpa.jpeg"
                height="160px"
              />
              <Card.Body>
                <Card.Title>Audit</Card.Title>
                <Card.Text>
                  Audits provide the list of records and search bar button from.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Button variant="primary" href='/login'>Login</Button>&nbsp;&nbsp;&nbsp;
                <Button variant="primary" href='/register'> SignUp</Button>&nbsp;&nbsp;&nbsp;
              </Card.Body>
            </Card>
            <br /> <br/>

          </Col>
        </Row>
      </Container>
      <Container>
        <Row md={3}>
          <Col></Col>
          <Col xs={6}>
            <Card style={{ width: '22rem' }} className="card-design">
              <Card.Img variant="top" src="./about.jpeg"
                height="160px"
              />
              <Card.Body>
                <Card.Title>About</Card.Title>
                <Card.Text>
                  About provides to the insurence details.find about life and vechils.
                </Card.Text>
              </Card.Body>
              <Card.Body>

                <Button variant="primary" onClick={navigateAbout}>view</Button>
              </Card.Body>
            </Card>
            <br/>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose} className="model">
        <Modal.Header closeButton>
          <Modal.Title className='dev'>Enquiry Form</Modal.Title>
        </Modal.Header>
        <Modal.Body className='form'>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone No</Form.Label>
              <Form.Control
                type="Number"
                placeholder="Enter your phone number"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your city Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your state"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Country"
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Write something about?</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            submit
          </Button>
        </Modal.Footer>
      </Modal>

    </div>

  )
}

export default Home