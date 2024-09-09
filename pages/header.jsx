import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../img/logo.png'; // 로고 이미지 가져오기

const Header = () => {
  return (
    <Navbar className='bg-black justify-content-center px-4 py-3' variant="dark" expand="lg">
      <Container className='mx-0'>
        <Navbar.Brand href="#">
          <img
            src={logo}
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          SoundHUB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <input type="text" placeholder="오늘의 관심 콘텐츠는 무엇인가요?" className="form-control bg-dark rounded-5 text-white border-0 mx-5 px-5" />
          </Nav>
          <Nav>
            <sapn className='btn btn-light text-black rounded-5 h6' href="#">로그인</sapn>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
