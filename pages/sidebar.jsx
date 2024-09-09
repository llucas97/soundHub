import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { GoHomeFill } from "react-icons/go";
import { PiMusicNotesPlusFill } from "react-icons/pi";

const Sidebar = () => {
  return (
    <Navbar variant="dark" expand="md" className="flex-column p-3 bg-dark vh-100">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='flex-column w-100'>
        <Nav className="flex-column w-100 d-flex">
          <Nav.Link href="/" className="text-white text-start"><GoHomeFill className='mx-3' /> 홈</Nav.Link>
          <Nav.Link href="/작업물" className="text-white text-start"><PiMusicNotesPlusFill className='mx-3'/> 작업물</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Sidebar;
