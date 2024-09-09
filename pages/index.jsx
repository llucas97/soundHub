import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import axios from 'axios';  // axios 추가
import '../src/App.css';
import logo from '../img/logo.png';
import google from '../img/google.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Index() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const isValidEmail = email.includes('@');
    const isValidPassword = password.length >= 6;
    setIsButtonDisabled(!isValidEmail || !isValidPassword);
  }, [email, password]);

  // 서버에 로그인 요청하는 함수 (axios 사용)
  const loginUser = async (email, password) => {
    try {
      const response = await axios.post('http://52.79.96.182:8080/users/login', {
        loginId: email,  // loginId로 요청
        password: password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        const data = response.data;
        return { success: true, data: data };
      } else {
        return { success: false };
      }
    } catch (error) {
      console.error('Error:', error);
      setError('서버와의 연결에 문제가 발생했습니다.');
      return { success: false };
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginResult = await loginUser(email, password);

    if (loginResult.success) {
      const { accessToken, refreshToken } = loginResult.data;

      // 토큰을 로컬 스토리지 또는 세션 스토리지에 저장할 수 있습니다.
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      navigate('/main');  // 로그인 성공 시 메인 페이지로 이동
    } else {
      setError('이메일 또는 비밀번호가 잘못되었습니다.');
      navigate('/signup');  // 로그인 실패 시 회원가입 페이지로 이동
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // 비밀번호 보이기/숨기기 토글 함수
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
            <Button className="p-2 align-items-center bg-black btn btn-light btn-primary d-flex justify-content-around justify-content-center mb-5 rounded-5 text-light w-100">
              <img src={google} alt="Google" style={{ width: '25px' }} />
              <span style={{ marginRight: '50px' }}>Google로 가입하기</span>
            </Button>
            <div className="text-light mb-4 hr-sect">or</div>
            {error && <div className="text-danger mb-4">{error}</div>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail" className="mb-3 text-start">
                <Form.Label>이메일</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="SoundHUB@domain.com"
                  className="text-white bg-black border-secondary form-control p-3 rounded-3"
                  value={email}
                  onChange={handleEmailChange}
                />
              </Form.Group>
              <Form.Group controlId="formPassword" className="mb-5">
                <InputGroup className="position-relative">
                  <Form.Control
                    type={passwordVisible ? 'text' : 'password'}
                    placeholder="비밀번호를 입력해 주세요"
                    className="bg-black form-control p-3 rounded-3 text-white border-secondary"
                    value={password}
                    onChange={handlePasswordChange}
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
                variant="danger"
                type="submit"
                className="btn btn-danger p-3 rounded-5 w-100 fw-bold"
                disabled={isButtonDisabled}
              >
                다음
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Index;
