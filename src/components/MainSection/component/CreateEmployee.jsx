import React, { useState } from 'react';
import axios from 'axios';

const CreateEmployee = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        designation: '',
        gender: '',
        course: [],
        image: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/employee', formData);
            alert("Employee created successfully");
        } catch (error) {
            alert("Error creating employee");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="text" name="mobile" placeholder="Mobile No" onChange={handleChange} />
            <select name="designation" onChange={handleChange}>
                <option value="HR">HR</option>
                <option value="Manager">Manager</option>
                <option value="Sales">Sales</option>
            </select>
            <input type="radio" name="gender" value="M" onChange={handleChange} /> Male
            <input type="radio" name="gender" value="F" onChange={handleChange} /> Female
            <input type="checkbox" name="course" value="MCA" onChange={handleChange} /> MCA
            <input type="file" name="image" onChange={handleChange} />
            <button type="submit">Create Employee</button>
        </form>
    );
};

export default CreateEmployee;
