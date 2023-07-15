import './SingleRecipePage.css';
import React from 'react';
import { useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import {
    FaCartPlus,
} from "react-icons/fa";
import {message } from 'antd';
import CartService from '../../../services/cartService';
import NavBar from '../../Navbar/Navbar';

const SingleRecipePage=({recipe,product})=>{
    const [quantity, setQuantity] = useState(1);

    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart =(product,quantity,amount)=> {
        CartService.addtocart({product, quantity, amount})
            .then((response) => {
                setCartItems(response.data);
                console.log(response.data);
                if(response.status === 201){
                    message.success('Product added to cart successfully');
                    
                }       
            }
            )       
          };
    
   

    const decrement = () => {
        setQuantity((prevState) => {
            if (prevState === 1) return 1;
            return prevState - 1;
        });
    };
    const increment = () => {
        setQuantity((prevState) => prevState + 1);
    };

    return(
        <>
        <NavBar/>
        
        <div className="single-recipe-main-content">
            <div className="layout">
            <span className='recipe-link'><iframe src={recipe.videolink} ></iframe></span>

                <div className="single-recipe-page">
                    {/* <div className="left">
                        <img src={"http://localhost:3000"+ recipe.image} alt="recipe"/>
                    </div> */}
                    <div className="right">
                        <span className='recipe-name'>{recipe.recipename}</span>
                        <span className='recipePageTitle'>Ingredients:</span>
                        <span className='recipe-ingredients'>{recipe.ingredients}</span>
                        <span className='recipePageTitle'>Instructions:</span>
                        <span className='recipe-instructions'>{recipe.instructions}</span>
                        <span className='recipePageTitle'>Shop Ingredients</span>

                        {/* <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={decrement} >-</span>
                                <span >{quantity}</span>
                                <span onClick={increment} >+</span>
                            </div>
                            <button className='add-to-cart-button'
                                onClick={() => handleAddToCart(product, quantity, recipe.price * quantity)
                                    
                                }>
                                <FaCartPlus size={20}/>
                                    Add to Cart
                            </button>

                        </div> */}
                        <span className='divider'></span>
                        <div className="info-item">
                            <span className='text-bold'>Category:
                                <span> {recipe.category.categoryName}</span>
                            </span>
                            

                        </div>

                    </div>

                </div>
                
            </div>
        </div>
        </>

    )

}
export default SingleRecipePage;