import React, { useState, useEffect } from 'react';
import NavBar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import heroimg from "../../images/heropic2.jpeg";
import Footer from "../Footer/Footer";
import ProductsContainer from "../Products/ProductsContainer";
import ProductService from "../../services/productService";
import { useLocation } from 'react-router-dom';
import './Recipes.css';


function Products({products, setProducts}){
  //remove {products, setProducts} to run search
    // const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

    useEffect(()=>{
        ProductService.getAll()
        .then(response => {
            setProducts(response.data.data);
        }).catch(err => console.log(err));
}, []);

useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get("search");
    setSearchTerm(searchQuery || "");
  }, [location.search]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const productName = product.name.toLowerCase();
    const searchTerms = searchTerm.toLowerCase();
    return productName.includes(searchTerms);
  });


    return(
        <div>
            <NavBar/>
            <Hero cName="hero"
            heroimg={heroimg}
            title="Shop Groceries"
            description="No more running to grocey store, order from here"
            btnClass='hide'
            />

<input className='searchfill'
                type="text"
                placeholder="Search products"
                value={searchTerm}
                onChange={handleSearch}
            />
            <ProductsContainer products={filteredProducts}/>
            
            <Footer/>
        </div>


    )
}

export default Products

 