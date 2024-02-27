import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import NewOrder from './components/NewOrder';
import OldOrder from './components/OldOrder';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="orders">
          <NewOrder />
          <OldOrder/>
        </div>
       
      </div>
    </Router>
  );
}

export default App;
