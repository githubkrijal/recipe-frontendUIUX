import React  from "react";
import NavBar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import heroimg from "../../images/heropic1.jpg";
import Popular from "../PopularProducts/PopularProducts";
import Footer from "../Footer/Footer";
import HomeEx from "../PopularProducts/HomepageCollect";

function Home(){
    return(
        <>
            <NavBar/>
            <Hero cName="hero"
            heroimg={heroimg}
            title="Recipe"
            description="Learn and show off you cooking skills wherever you go"

            
           
            />   
            <Popular/>
            <HomeEx/>
            <Footer/>

        </>


    )
}

export default Home