import React from 'react';
import './App.css';
import clinicData from './clinicData.json';
import ClinicList from './components/ClinicList';

const App = () => {
  return (
    <div className="App">
      <ClinicList clinics={clinicData.clinics} />
    </div>
  );
};

export default App;
