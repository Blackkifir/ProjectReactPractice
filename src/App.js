import React from 'react';
import './App.css';
import './scss/.app.scss';
import Home from './page/Home';
import Registration from './components/LoginAndPassword/Registration';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const { emailDirty } = useSelector((state) => state.registration);
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Registration />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      {emailDirty === false && <Navigate to='/login' />}
    </>
  );
}
export default App;


