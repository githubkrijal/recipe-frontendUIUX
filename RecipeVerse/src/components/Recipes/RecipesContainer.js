import './Recipes.css'
import React,{useState,useEffect} from 'react';
import Recipe from './Recipe/Recipe'
const RecipesContainer=({recipes})=>{
    

    return(
        <div className="recipes-container" >
            <div className="recipesection-heading">Our Recipes </div>
            <div className="recipes">
                {recipes.map((items)=>{
                    return <Recipe key={items.id} recipes={items}/>
                }
                )}
            </div>

        </div>
        
    )
}
   
export default RecipesContainer;