import React from 'react';
import { Container, Row, Col, Card, Dropdown } from 'react-bootstrap';
import Sidebar from '../pages/sidebar';
import Header from '../pages/header';

const Work = () => {
  return (
    <Container fluid className='bg-black p-0 overflow-x-hidden'>
      <Header />
      <Row>
        <Col md={2} className="d-none d-md-block">
          <Sidebar />
        </Col>
        <Col md={10} className='p-5'>
          <Row>
            <div className='d-flex'>
              <div className='btn btn-dark rounded-pill mx-2 px-3'>전체</div>
              <div className='btn btn-dark rounded-pill mx-2 px-3 opacity-50'>곡</div>
              <div className='btn btn-dark rounded-pill mx-2 px-3 opacity-50'>앨범</div>
              <div className='btn btn-dark rounded-pill mx-2 px-3 opacity-50'>연주</div>
            </div>

            <h4 className="text-white mt-4 fw-bold">이달의 아티스트</h4>
            <Row className="mt-2">
              {[...Array(6)].map((_, index) => (
                <Col md={2} key={index} className="mb-3">
                  <Card className="bg-dark text-white border-0 p-1 position-relative">
                    <Card.Img className="img-fluid" variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body className="text-start">
                      <Card.Title className="fw-bold">Lorem(앨범 명)</Card.Title>
                      <Card.Text className='text-light text-opacity-50'>23.04.01</Card.Text>
                    </Card.Body>
                    <Dropdown className="position-absolute" style={{ top: '10px', right: '10px' }}>
                      <Dropdown.Toggle variant="dark" id="dropdown-basic" size="sm" className="border-0">
                        ⋮
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">수정하기</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">삭제하기</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Card>
                </Col>
              ))}
            </Row>

            <h4 className="text-white mt-4 fw-bold">실시간 급상승</h4>
            <Row className="mt-2">
              {[...Array(6)].map((_, index) => (
                <Col md={2} key={index} className="mb-3">
                  <Card className="bg-dark text-white border-0 p-1 position-relative">
                    <Card.Img className="img-fluid" variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body className="text-start">
                      <Card.Title className="fw-bold">Lorem(앨범 명)</Card.Title>
                      <Card.Text className='text-light text-opacity-50'>23.04.01</Card.Text>
                    </Card.Body>
                    <Dropdown className="position-absolute" style={{ top: '10px', right: '10px' }}>
                      <Dropdown.Toggle variant="dark" id="dropdown-basic" size="sm" className="border-0">
                        ⋮
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">수정하기</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">삭제하기</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Card>
                </Col>
              ))}
            </Row>

            <h4 className="text-white mt-4">NEW!</h4>
            <Row className="mt-2">
              {[...Array(6)].map((_, index) => (
                <Col md={2} key={index} className="mb-3">
                  <Card className="bg-dark text-white border-0 p-1 position-relative">
                    <Card.Img className="img-fluid" variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body className="text-start">
                      <Card.Title className="fw-bold">Lorem(앨범 명)</Card.Title>
                      <Card.Text className='text-light text-opacity-50'>23.04.01</Card.Text>
                    </Card.Body>
                    <Dropdown className="position-absolute" style={{ top: '10px', right: '10px' }}>
                      <Dropdown.Toggle variant="dark" id="dropdown-basic bg-dark" size="sm" className="border-0">
                        ⋮
                      </Dropdown.Toggle>
                      <Dropdown.Menu className='bg-dark'>
                        <Dropdown.Item href="#/action-1">수정하기</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">삭제하기</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Card>
                </Col>
              ))}
            </Row>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Work;
