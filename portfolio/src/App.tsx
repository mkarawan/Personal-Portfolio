import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Page from './components/Page/Page';
import './i18n';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Page />
    </div>
  );
}

export default App;
