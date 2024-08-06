import React from 'react';
import PatientList from "./components/PatientList"
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PatientForm from './components/PatientForm';
import PatientDetail from './components/PatientDetail';
import Patient from './components/Patient';
import PatientUpdate from './components/Patient';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Clinic</h3>
      </header>
      {/* <Container> */}
        {/* <SearchBar></SearchBar> */}

        {/* <PatientList></PatientList> */}
      {/* </Container> */}
      <Router>
        <Routes>
          <Route path="/" element={<PatientList />} />
          <Route path="/patients/:id" element={<PatientDetail />} />
          <Route path="/patients/new" element={<PatientForm />} />
          
          <Route path="/patients/new/01" element={<PatientForm />} />
          <Route path="/patients/update/:id" element={<PatientUpdate />} />
          <Route path="/patients/table/:id" element={<Patient />} />
          
          {/* Các tuyến đường khác */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
