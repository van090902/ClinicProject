import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Table } from 'react-bootstrap';
// import PatientForm from './PatientForm';

const PatientDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [patient, setPatient] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) {
            setError("Patient ID is missing");
            return;
        }

        const fetchPatient = async () => {
            try {
                const response = await axios.get(`https://localhost:7189/api/Patients/${id}`);
                setPatient(response.data);
            } catch (error) {
                console.error("Failed to fetch patient", error);
                setError("Failed to fetch patient" + error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPatient();
    }, [id]);

    const handleDeactivate = async () => {
        try {
            await axios.patch(`https://localhost:7189/api/Patients/${id}/deactivate`, { reason: 'No longer active' });
            navigate('/');
        } catch (error) {
            console.error("Failed to deactivate patient", error);
        }
    };

    const handleUpdate = () => {
        navigate(`/patients/new/${id}`);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!patient) return <div>Patient not found...</div>;

    return (
        <div>
            <h1>Patient Detail</h1>
            
            <Table bordered striped hover>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <td>{patient.id}</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <td>{patient.name}</td>
                        </tr>
                        <tr>
                            <th>Date of Birth</th>
                            <td>{new Date(patient.dob).toLocaleDateString()}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{patient.email}</td>
                        </tr>
                        <tr>
                            <th>Phone</th>
                            <td>{patient.phoneNumber}</td>
                        </tr>
                        <tr>
                            <th>Primary Address</th>
                            <td>{patient.addressPrimary}</td>
                        </tr>
                        <tr>
                            <th>Secondary Address</th>
                            <td>{patient.addressSecondary || 'N/A'}</td>
                        </tr>
                        <tr>
                            <th>Status</th>
                            <td>{patient.isActive ? "Active" : "Inactive"}</td>
                        </tr>
                    </tbody>
                </Table>
                <button onClick={handleUpdate}>Update</button>
                {patient.isActive && (
                <button variant="danger" onClick={handleDeactivate}>Deactivate</button>
            )}
            {/* <button onClick={handleDeactivate}>Hủy kích hoạt</button> */}
        </div>
    );
};

export default PatientDetail;
