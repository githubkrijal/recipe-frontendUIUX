import React, { useState, useEffect } from 'react';
import NavBar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import heroimg from '../../images/heropic2.jpeg';
import Footer from '../Footer/Footer';
import RecipesContainer from "../Recipes/RecipesContainer";
import RecipeService from "../../services/recipeService";
import { useLocation } from 'react-router-dom';
import './Recipes.css';

function Recipes({recipes,setRecipes}) {
    //remove {recipes,setRecipes} to run search

  // const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  useEffect(() => {
    RecipeService.getAll()
      .then(response => {
        setRecipes(response.data.data);
        console.log(recipes);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get("search");
    setSearchTerm(searchQuery || "");
  }, [location.search]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRecipes = recipes.filter((recipe) => {
    const recipeName = recipe.recipename.toLowerCase();
    const searchTerms = searchTerm.toLowerCase();
    return recipeName.includes(searchTerms);
  });

  return (
    <div>
      <NavBar />
      <Hero
        cName="hero"
        heroimg={heroimg}
        title="Our Recipes"
        description="Explore the food world, cook what you desire"
        btnClass='hide'
      />

      <input className='searchfill'
        type="text"
        placeholder="Search recipes"
        value={searchTerm}
        onChange={handleSearch}
      />
     
      <RecipesContainer recipes={filteredRecipes} />
     
      <Footer />
    </div>
  );
}

export default Recipes;
