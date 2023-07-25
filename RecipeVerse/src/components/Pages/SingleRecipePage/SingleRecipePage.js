import React, { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { message } from 'antd';
import CartService from '../../../services/cartService';
import NavBar from '../../Navbar/Navbar';
import ProductsContainer from '../../Products/ProductsContainer';
import Product from '../../Products/Product/Product';
import './SingleRecipePage.css';

const SingleRecipePage = ({ recipe, products }) => {
  const [showInstructions, setShowInstructions] = useState(false);

  const handleToggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  return (
    <>
      <NavBar />

      <div className="single-recipe-main-content">
        <div className="layout">
          <span className="recipe-link">
            <iframe src={recipe.videolink}></iframe>
          </span>

          <div className="single-recipe-page">
            {/* <div className="left">
              <img src={'http://localhost:3000' + recipe.image} alt="recipe" />
            </div> */}
            <div className="right">
              <span className="recipe-name">{recipe.recipename}</span>
              <span className="recipePageTitle">Ingredients:</span>
              <span className="recipe-ingredients">{recipe.ingredients}</span>
              <span className="recipePageTitle">Instructions:</span>
              <span className="recipe-instructions">
                {showInstructions ? recipe.instructions : `${recipe.instructions.slice(0, 100)}...`}
              </span>
              <span className="toggle-instructions" onClick={handleToggleInstructions}>
                {showInstructions ? 'See Less' : 'See More'}
              </span>

              <span className="divider"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="section-heading" style={{ margin: '2rem 9.5rem' }}>Groceries</div>
      <div className="recipef" style={{ margin: '0rem 5rem', '@media (max-width: 900px)': { margin: 'auto' } }}>
  {products.slice(0, 3).map((items) => {
    return <Product key={items.id} products={items} />;
  })}
</div>


    </>
  );
};

export default SingleRecipePage;
