import React, { useState } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Patient from './Patient';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'



const PatientList = () => {
    const [patients, setPatients] = useState([]);
    const [search, setSearch] = useState('');


    const handleSearch = async (e) => {
        e.preventDefault();
        const response = await axios.get(`https://localhost:7189/api/Patients?search=${search}`);
        setPatients(response.data);
    };

    return (
    <div>
        <h1>List of patients</h1>
        <form onSubmit={handleSearch}>
        <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for patients..."
        />
        <button type="submit">Search</button>
        </form>
        <ul>
            {patients.map((patient) => (
            <li key={patient.id}>
                <Table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Date of Birth</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Primary Address</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{patient.id}</th>
                            <td>{patient.name}</td>
                            <td>{new Date(patient.dob).toLocaleDateString()}</td>
                            {/* <td>{patient.email}</td> */}
                            <td>{patient.phoneNumber}</td>
                            <td>{patient.addressPrimary}</td>
                            {/* <td>{patient.addressSecondary || 'N/A'}</td> */}
                            <td>{patient.isActive ? "Active" : "Inactive"}</td>
                        </tr>
                    </tbody>
                </Table>
            </li>
            ))}
        </ul>
        
        
        
    </div>
    );
};

export default PatientList;
