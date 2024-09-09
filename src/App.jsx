import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from '../pages/index';
import Login from '../pages/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from '../pages/signup';
import Main from '../pages/main'
import Profile from '../pages/profile'
import Work from '../pages/work';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<Main />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/work" element={<Work/>} />
      </Routes>
    </Router>
  );
}

export default App;
