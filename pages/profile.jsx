import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import Sidebar from '../pages/sidebar';
import Header from '../pages/header';

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const [favoriteArtists, setFavoriteArtists] = useState([]);
  const [artistInput, setArtistInput] = useState("");

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleArtistInputChange = (e) => {
    setArtistInput(e.target.value);
  };

  const handleArtistInputKeyDown = (e) => {
    if (e.key === 'Enter' && artistInput.trim()) {
      if (favoriteArtists.length < 5 && !favoriteArtists.includes(artistInput.trim())) {
        setFavoriteArtists([...favoriteArtists, artistInput.trim()]);
        setArtistInput("");
      }
    }
  };

  const handleRemoveArtist = (artist) => {
    setFavoriteArtists(favoriteArtists.filter(a => a !== artist));
  };

  return (
    <Container fluid className='bg-black p-0 overflow-x-hidden'>
      <Header />
      <Row>
        <Col md={2} className="d-none d-md-block">
          <Sidebar />
        </Col>
        <Col md={10} className='bg-dark px-5 py-4 rounded-4'>
          <Card className="bg-dark text-white border-0">
            <Card.Body>
              <div className="align-items-center d-flex justify-content-between mb-4">
                <div className='d-flex align-items-center'>
                    <div className="rounded-circle bg-secondary d-flex justify-content-center align-items-center" style={{ width: '100px', height: '100px' }}>
                    <i className="bi bi-person-fill" style={{ fontSize: '40px' }}></i>
                    </div>
                    <div className="ms-3">
                    <h2 className="mb-0">Laim</h2>
                    <p className="text-danger">작곡가, 프로듀서</p>
                    <div>
                        <Button variant="outline-light rounded-5 opacity-50" size="sm" className="me-2">채드</Button>
                        <Button variant="outline-light rounded-5 opacity-50" size="sm" className="me-2">언디</Button>
                        <Button variant="outline-light rounded-5 opacity-50" size="sm">포크</Button>
                    </div>
                    </div>    
                </div>
                <Button className='btn btn-light rounded-5' onClick={handleShow}>수정</Button>
              </div>
              <Card className="bg-secondary text-white p-3 mb-4">
                경기도에서 음악을 하고 있는 홍길동입니다.
              </Card>
              <ul className="list-unstyled">
                <li>• 2021 지역 페스티벌 참가</li>
                <li>• 1집 앨범 '가나다' 발매 (2018.04.23)</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal for Editing Profile */}
      <Modal show={showModal} onHide={handleClose} centered size="md">
        <div className="modal-dialog modal-dialog-centered m-0 bg-dark rounded-5">
          <div className="bg-dark modal-content border-0 bg-transparent p-4 ">
            <div className="bg-dark border-0 modal-header m-0 p-1">
              <div className="h4 modal-title text-light">프로필 정보 수정</div>
              <button type="button" className="btn-close btn-close-white" aria-label="Close" onClick={handleClose}></button>
            </div>
            <div className="bg-dark text-white modal-body">
              <div className="align-items-center d-flex justify-content-between mb-4 text-center">
                <div className="rounded-circle bg-secondary d-flex justify-content-center align-items-center" style={{ width: '130px', height: '130px' }}>
                  <i className="bi bi-person-fill" style={{ fontSize: '40px' }}></i>
                </div>
                <div className="text-start w-50">
                  <label className="form-label" htmlFor="formName">이름</label>
                  <input placeholder="Laim" type="text" id="formName" className="bg-secondary border-0 text-white form-control" />
                </div>
              </div>
              <Form>
                <Row>
                  <Col>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="formGenre">장르</label>
                      <Form.Select id="formGenre" className="bg-secondary border-0 text-white">
                        <option>힙합</option>
                        <option>록</option>
                        <option>재즈</option>
                        <option>소울</option>
                        <option>블루스</option>
                        <option>EDM</option>
                        <option>레게</option>
                        <option>컨트리</option>
                        <option>클래식</option>
                      </Form.Select>
                    </div>
                  </Col>
                  <Col>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="formPosition">포지션</label>
                      <input placeholder="ex. 프로듀서" type="text" id="formPosition" className="bg-secondary border-0 text-white form-control" />
                    </div>
                  </Col>
                </Row>
                <div className="mb-3">
                  <label className="form-label" htmlFor="formFavoriteArtist">좋아하는 아티스트<span className='text-dark-emphasis px-2' style={{ fontSize: "12px" }}>*최대 5개</span></label>
                  <div className="d-flex flex-wrap mb-2">
                    {favoriteArtists.map((artist, index) => (
                      <Button
                        key={index}
                        variant="outline-danger"
                        className="rounded-pill me-2 mb-2 d-flex align-items-center"
                        onClick={() => handleRemoveArtist(artist)}
                      >
                        {artist} <span className="ms-2">&times;</span>
                      </Button>
                    ))}
                  </div>
                  <input
                    placeholder="입력 후 Enter를 눌러주세요"
                    type="text"
                    id="formFavoriteArtist"
                    value={artistInput}
                    onChange={handleArtistInputChange}
                    onKeyDown={handleArtistInputKeyDown}
                    className="bg-secondary border-0 text-white form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label m-0" htmlFor="formDescription">당신은 어떤 아티스트인가요?</label>
                  <span className='text-dark-emphasis d-block mb-3' style={{ fontSize: "12px" }}>다른 사용자에게 노출될 한 줄 소개를 입력해 주세요</span>
                  <textarea rows="3" placeholder="" id="formDescription" className="bg-secondary border-0 text-white form-control"></textarea>
                </div>
              </Form>
            </div>
            <div className="bg-dark border-0 modal-footer p-0">
              <Button type="button" className="rounded-5 btn btn-light" onClick={handleClose}>
                저장하기
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </Container>
  );
}

export default Profile;
