import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import DataDisplay from './components/DataDisplay';
import Form from './components/JcsForm';

const App = () => (
  <Router basename="/" future={{ v7_relativeSplatPath: true }}>
    <Navbar  />
    <Routes className="mt-96">
      <Route path="/" element={<Form />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<DataDisplay />} />
    </Routes>
  </Router>
);

export default App;
