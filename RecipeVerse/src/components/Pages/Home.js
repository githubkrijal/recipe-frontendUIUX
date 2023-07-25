import React, { useState, useRef } from "react";
import NavBar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import heroimg from "../../images/heropic1.jpg";
import Popular from "../PopularProducts/PopularProducts";
import Footer from "../Footer/Footer";
import HomeEx from "../PopularProducts/HomepageCollect";
import { useNavigate } from "react-router-dom";
import './Home.css';


function Home() {
  const navigate = useNavigate();
  const searchInputRef = useRef(null);

  const handleSearch = () => {
    const searchTerm = searchInputRef.current.value;
    navigate(`/recipes?search=${searchTerm}`);
  };

  return (
    <>
      <NavBar />
      <Hero
        cName="hero"
        heroimg={heroimg}
        title="Recipe"
        description="Learn and show off your cooking skills wherever you go"
      />

      <div className="searchfillbtn">
        <input
          type="text"
          placeholder="Search recipes"
          ref={searchInputRef}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <Popular />
      <HomeEx />
      <Footer />
    </>
  );
}

export default Home;
