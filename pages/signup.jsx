import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, ProgressBar } from 'react-bootstrap';
import { FiChevronLeft } from "react-icons/fi";
import { useNavigate } from 'react-router-dom'; // useNavigate 훅을 임포트
import '../src/App.css'; 
import logo from '../img/logo.png'; 

function SignUp() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    verificationCode: '',
    password: '',
    name: ''
  });

  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      navigate('/main'); // 마지막 스텝에서 /main으로 이동
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const renderFormStep = () => {
    switch(step) {
      case 1:
        return (
          <Form onSubmit={handleNextStep}>
            <Form.Group controlId="formVerificationCode" className="mb-4">
              <Form.Control
                type="text"
                placeholder="인증번호를 입력해 주세요"
                className="bg-black text-white border-secondary p-3 rounded-3"
                name="verificationCode"
                value={formData.verificationCode}
                onChange={handleChange}
              />
            </Form.Group>
            <Button
              variant="secondary"
              type="submit"
              className="btn btn-secondary p-3 rounded-5 w-100 fw-bold"
            >
              다음
            </Button>
          </Form>
        );
      case 2:
        return (
          <Form onSubmit={handleNextStep}>
            <Form.Group controlId="formPassword" className="mb-4">
              <Form.Control
                type="password"
                placeholder="비밀번호를 입력해 주세요"
                className="bg-black text-white border-secondary p-3 rounded-3"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Button
              variant="secondary"
              type="submit"
              className="btn btn-secondary p-3 rounded-5 w-100 fw-bold"
            >
              다음
            </Button>
          </Form>
        );
      case 3:
        return (
          <Form onSubmit={handleNextStep}>
            <Form.Group controlId="formName" className="mb-4">
              <Form.Control
                type="text"
                placeholder="이름을 입력해 주세요"
                className="bg-black text-white border-secondary p-3 rounded-3"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Button
              variant="secondary"
              type="submit"
              className="btn btn-secondary p-3 rounded-5 w-100 fw-bold"
            >
              완료
            </Button>
          </Form>
        );
      default:
        return null;
    }
  };

  const getProgress = () => {
    return (step / 4) * 100;
  };

  return (
    <div className="d-flex vh-100 align-items-center justify-content-center bg-black text-white">
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col xs={10} md={8} lg={4}>
            <div className="mb-4">
              <img src={logo} alt="Logo" className="img-fluid mb-2" style={{ width: '50px' }} />
              <h1 className="h4 fw-bold">SoundHUB</h1>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-5">
              {step > 1 && (
                <Button
                  variant="link"
                  onClick={handlePreviousStep}
                  className="p-0"
                  style={{ color: 'darkgrey' }}
                >
                  <FiChevronLeft size={35}/>
                </Button>
              )}
              <ProgressBar now={getProgress()} variant="danger" className="flex-grow-1 mx-3" style={{ height: '2px' }} />
            </div>
            {renderFormStep()}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignUp;
