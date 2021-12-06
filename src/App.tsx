import React from 'react';
import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import Dashboard from './containers/Dashboard';
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard/*' element={<Dashboard/>}/>
          <Route path='/*' element={<Navigate to="/dashboard"/>}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
