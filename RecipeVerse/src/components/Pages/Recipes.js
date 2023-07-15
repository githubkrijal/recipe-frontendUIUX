import React from 'react'
import NavBar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import heroimg from '../../images/car2.jpg'
import Footer from '../Footer/Footer'


import RecipesContainer from "../Recipes/RecipesContainer";
import { useEffect } from "react";
import RecipeService from "../../services/recipeService";
// function Recipes(){
//     return(
//         <div>
//             <NavBar/>
//             {/* <Hero cName="hero-mid"
//             heroimg={heroimg}
//             title="About us"
//             description="From 2020, Artsy has been providing the best quality of art to the people. We have a wide range of art products. We have a team of experts who are always ready to help you."
//             btnClass='hide'
//             /> */}
            
//             <Hero cName="hero"
//             heroimg={heroimg}
//             title="Recipe"
//             description="Get your aesthetic enjoyment here page 2"
//             btnClass='hide'
           
//             />   

//             <Recipe/>
//             <Footer/>
           
//         </div>
//     )

// }

// export default Recipes



function Recipes({recipes,setRecipes}){
    useEffect(()=>{
        RecipeService.getAll()
        .then(response => {
            setRecipes(response.data.data)
            console.log(recipes)
        }).catch(err => console.log(err))
}, [])


    return(
        <div>
            <NavBar/>
            <Hero cName="hero"
            heroimg={heroimg}
            title="Our Recipes"
            description="Over 100 products to choose from"
            btnClass='hide'
            />
            <RecipesContainer recipes={recipes}/>
            <Footer/>
        </div>


    )
}

export default Recipes

 