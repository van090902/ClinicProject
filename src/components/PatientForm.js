import React, { useState } from 'react';
import axios from 'axios';

const PatientForm = ({ patient, onSuccess }) => {
    const [name, setName] = useState(patient ? patient.name : '');
    const [dob, setDob] = useState(patient ? patient.dob : '');
    const [phoneNumber, setPhoneNumber] = useState(patient ? patient.phoneNumber : '');
    const [gender, setGender] = useState(patient ? patient.gender : '');
    const [email, setEmail] = useState(patient ? patient.email : '');
    const [addressPrimary, setAddressPrimary] = useState(patient ? patient.addressPrimary : '');
    const [addressSecondary, setAddressSecondary] = useState(patient ? patient.addressSecondary : '');
    
    const [success, setSuccess] = useState(false); // Trạng thái để hiển thị thông báo thành công


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { name, dob, gender, phoneNumber, email, addressPrimary, addressSecondary  };
        console.log("Submitting data:", data);
        try {
            if (patient) {
                await axios.put(`https://localhost:7189/api/Patients/${patient.id}`, data);
            } else {
                await axios.post(`https://localhost:7189/api/Patients`, data);
            }
            setSuccess(true);
            onSuccess();
        } catch (error) {
            console.error("Error:", error); // Thêm dòng này để kiểm tra lỗi
        }
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
        <div>
            <label>Name:</label>
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
        </div>
        <div>
            <label>Date:</label>
            <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
            />
        </div>
        <div>
            <label>Phone Number:</label>
            <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            />
        </div>
        <div>
            <label>Gender:</label>
            <input
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            />
        </div>
        <div>
            <label>Address Primary:</label>
            <input
            type="text"
            value={addressPrimary}
            onChange={(e) => setAddressPrimary(e.target.value)}
            required
            />
        </div>
        <div>
            <label>Address Secondary:</label>
            <input
            type="text"
            value={addressSecondary}
            onChange={(e) => setAddressSecondary(e.target.value)}
            required
            />
        </div>
        <div>
            <label>Email:</label>
            <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        </div>
        <button type="submit">{patient ? 'Update' : 'Add'}</button>
        </form>
        {success && <div>Success! The patient data has been {patient ? 'updated' : 'added'} successfully.</div>}
        </div>
    );
};

export default PatientForm;
