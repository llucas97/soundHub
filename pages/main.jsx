import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Sidebar from '../pages/sidebar';
import Header from '../pages/header';

const Main = () => {
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
              <div className='btn btn-light rounded-5 mx-2'>전체</div>
              <div className='btn btn-secondary opacity-50 rounded-5 mx-2'>재즈</div>
              <div className='btn btn-secondary opacity-50 rounded-5 mx-2'>인디</div>
              <div className='btn btn-secondary opacity-50 rounded-5 mx-2'>포크</div>
            </div>
            <h4 className="text-white mt-4 fw-bold">이달의 아티스트</h4>
            {[...Array(5)].map((_, index) => (
              <Col md={2} key={index}>
                <Card className="card-hover bg-black text-white text-center mb-3 mt-4 border-0">
                  <Card.Img className='rounded-circle' variant="top" src="https://via.placeholder.com/150" />
                  <Card.Body className='text-start'>
                    <Card.Title>Lorem</Card.Title>
                    <Card.Text className='card-text h-6 text-light text-opacity-50'>#재즈 #포크</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row>
            <h4 className="text-white mt-4 fw-bold">실시간 급상승</h4>
            {[...Array(5)].map((_, index) => (
              <Col md={2} key={index}>
                <Card className="card-hover bg-black text-white text-center mb-3 border-0 p-1">
                  <Card.Img variant="top" src="https://via.placeholder.com/150" />
                  <Card.Body className='card-hover text-start bg-black'>
                    <Card.Title>Lorem</Card.Title>
                    <Card.Text className='card-text h-6 text-light text-opacity-50'>Lorem(아티스트명)</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row>
            <h4 className="text-white mt-4">NEW!</h4>
            {[...Array(5)].map((_, index) => (
              <Col md={2} key={index}>
                <Card className="card-hover bg-black text-white text-center mb-3 border-0 p-1">
                  <Card.Img variant="top" src="https://via.placeholder.com/150" />
                  <Card.Body className='card-hover text-start bg-black'>
                    <Card.Title>Lorem</Card.Title>
                    <Card.Text className='card-text h-6 text-light text-opacity-50'>Lorem</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
