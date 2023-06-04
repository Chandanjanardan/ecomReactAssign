import React,{useState} from 'react'
import Title from "./subcomponent/Title"
import "./css/header.css"

function Header({name,setName,showtitlepage,setShowtitelpage}) {
    function handleCLick(){
        setName("Herovired")
        setShowtitelpage(false)
    }
  return (
    <header className="header">
    <button className="header-button">Home</button>
    <button className="header-button">Contact Us</button>
    <div className="header-search">
      <input type="text" placeholder="Search" className="search-input" />
      <button className="search-button">Search</button>
    </div>
  </header>
);
};

export default Header