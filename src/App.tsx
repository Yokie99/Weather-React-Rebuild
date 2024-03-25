import React from 'react';

import './App.css';
import NavbarComponent from './Components/NavbarComponent';
import MainWeatherComponent from './Components/MainWeatherComponent';
import FiveDayComponent from './Components/FiveDayComponent';

function App() {
  return (
    <>
    <NavbarComponent/>
    <MainWeatherComponent/>
    <div className='mx-16 grid grid-cols-5'>
      <FiveDayComponent/>
      <FiveDayComponent/>
      <FiveDayComponent/>
      <FiveDayComponent/>
      <FiveDayComponent/>
    </div>
    
    </>
  );
}

export default App;
