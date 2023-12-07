import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Card from "./card";
import Destination from "./destination";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const SearchBar =() => {
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();
    const handleButtonClick = () => {
        // Check if the input is empty
        if (searchInput.trim() === '') {
            // If input is empty, stay on the same page or take appropriate action
            // For example, you can show a message or perform some other logic
            console.log('Input is empty. Not navigating.');
          } else {
            // If input is not empty, navigate to the destination page with search results
            navigate(`/destination?search=${encodeURIComponent(searchInput)}`);
  }
};
    

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };


    
    return( <div className='return' style={{display:'flex'}}>
        <input className="search-input" 
            type="text"
            placeholder="Search for destinations.."
            onChange={handleChange}
            value={searchInput} />
            <div style={{display:'flex', padding:'20px', height: '50px'}}><button onClick={handleButtonClick} className='button'><CiSearch /></button></div>
        

        
    </div>
    );   
};

export default SearchBar;