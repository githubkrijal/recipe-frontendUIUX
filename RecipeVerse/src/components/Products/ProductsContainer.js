import './Products.css'
import React,{useState,useEffect} from 'react';
import Product from './Product/Product'
const ProductsContainer=({products})=>{
    

    return(
        <div className="products-container" >
            <div className="section-heading">Groceries</div>
            <div className="products">
                {products.map((items)=>{
                    return <Product key={items.id} products={items}/>
                }
                )}
            </div>

        </div>
    )
}
   
export default ProductsContainer;