import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppRoutes from './App.routes';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
