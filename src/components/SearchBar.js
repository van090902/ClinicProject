import React from 'react'
import { useState } from "react";


export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        console.log('Searching for:', searchTerm);
        // Thêm logic tìm kiếm ở đây
    };
    return (
        <div className="input-group mb-2">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Enter here" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search input"
            >
            </input>
            <button 
                className="btn btn-outline-secondary" 
                type="button" 
                id="button-addon2"
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    );
}