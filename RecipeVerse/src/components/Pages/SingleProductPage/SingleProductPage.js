import './SingleProductPage.css';
import productimg from '../../../images/product1.jpg';
import React from 'react';
import { useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import {
    FaCartPlus,
} from "react-icons/fa";
import {message } from 'antd';
import CartService from '../../../services/cartService';
import NavBar from '../../Navbar/Navbar';

const SingleProductPage=({product})=>{
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
        
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={"http://localhost:3000"+ product.image} alt="product"/>
                    </div>
                    <div className="right">
                        <span className='product-name'>{product.name}</span>
                        <span className='product-description'>{product.description}</span>
                        <span className='product-price'>Rs. {product.price}</span>

                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={decrement} >-</span>
                                <span >{quantity}</span>
                                <span onClick={increment} >+</span>
                            </div>
                            <button className='add-to-cart-button'
                                onClick={() => handleAddToCart(product, quantity, product.price * quantity)
                                }>
                                <FaCartPlus size={20}/>
                                    Add to Cart
                            </button>
                        </div>
                        <span className='divider'></span>
                        <div className="info-item">
                            <span className='text-bold'>Category:
                                <span> {product.category.categoryName}</span>
                            </span>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
        </>

    )

}
export default SingleProductPage;