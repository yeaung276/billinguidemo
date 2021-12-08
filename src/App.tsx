import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import Dashboard from './containers/Dashboard';
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
          <Dashboard/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
