import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import '../src/App.css';
import logo from '../img/logo.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="d-flex vh-100 align-items-center justify-content-center bg-black text-white">
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col xs={10} md={8} lg={3}>
            <div className="mb-5">
              <img src={logo} alt="Logo" className="img-fluid mb-2" style={{ width: '50px' }} />
              <h1 className="h4 fw-bold">SoundHUB 시작하기</h1>
            </div>
            <Form>
              <Form.Group controlId="formPassword" className="mb-5">
                <InputGroup className="position-relative">
                  <Form.Control
                    type={passwordVisible ? 'text' : 'password'}
                    placeholder="비밀번호를 입력해 주세요"
                    className="bg-black form-control p-3 rounded-3 text-white border-secondary"
                  />
                  <span
                    className="position-absolute top-50 end-0 translate-middle-y pe-3 text-white"
                    onClick={togglePasswordVisibility}
                    style={{ cursor: 'pointer' }}
                  >
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </InputGroup>
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="btn btn-primary p-3 rounded-5 w-100 fw-bold"
              >
                완료
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
