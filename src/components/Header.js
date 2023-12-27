import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchImages, clearImages } from "../actions/action";
import "./style.css";
import { CiSearch } from "react-icons/ci";
import Logo from './Images/imagesLogo.png'
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
 
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(clearImages());

    dispatch(fetchImages(searchQuery));
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [searchQuery]);
  return (
    // <header>
    <header className="search-header">
      <div className="logo">
        <img src={Logo} alt="Unsplash Logo" />
      </div>
      <div className="search-container">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            id='search'
            name="cityname"
            list="cityname"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder='Search free high-resolution photos'
          />{" "}
          <button type="submit">
          <i>   <CiSearch></CiSearch></i>
          </button>

         
        </form>
  
      </div>
     
    </header>
  );
};

export default Header;
