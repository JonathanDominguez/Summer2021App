import React from 'react'
import './SearchBar.css'
import { AiOutlineSearch } from "react-icons/ai";


const SearchBar = () => {
    return (
        <div>
            <div className="search-container">
                <div className="search-bar">
                    <input type="text" className="search-input" placeholder="Search Job Titles or Tags"/>
                    <button type="submit" className="search-icon-container">
                            <AiOutlineSearch className = "search-icon"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
