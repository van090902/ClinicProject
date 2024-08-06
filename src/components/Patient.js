import React from "react"
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const Patient = () => {
    const { id } = useParams();
    const [patient, setPatient] = useState(null);

    useEffect(() => {
        console.log("Fetching patient with ID:", id); // Kiểm tra giá trị của ID
        if (!id) return <div>Not found...</div>; // Nếu id không xác định, không thực hiện cuộc gọi API

        const fetchPatient = async () => {
            try {
                console.log(`Fetching patient with ID: ${id}`); // Log ID đang được sử dụng
                
                const response = await axios.get(`https://localhost:7189/api/Patients/${id}`);
                console.log("Patient data:", response.data); // Kiểm tra dữ liệu trả về
                
                setPatient(response.data);
            } catch (error) {
                console.error("Failed to fetch patient", error);
            }
        };

        fetchPatient();
    }, [id]); // Phụ thuộc vào id


    if (!patient) return <div>Loading...</div>;

    return (
        <div>
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
        </div>
    );
};

export default Patient;
