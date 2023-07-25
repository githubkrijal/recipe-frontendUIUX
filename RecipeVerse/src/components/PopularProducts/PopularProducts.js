import CategoriesData from "./CategoriesData";
import "./PopularProducts.css";
import recipe1 from "../../images/recipecate1.jpeg";
import recipe2 from "../../images/recipecate2.jpeg";
import recipe3 from "../../images/recipecate3.jpeg";
import recipe4 from "../../images/recipecate4.jpeg";
import recipe5 from "../../images/recipecate5.jpeg";
import recipe6 from "../../images/recipecate6.jpeg";


import glass1 from "../../images/glass1.jpg";
import glass2 from "../../images/glass2.png";

const Popular=({products})=>{
    return(
        <div className="popular">
           <h1 className="red-heading">Popular Recipes</h1>
            <CategoriesData
            className="popular-products"
            heading="Pizza"
            // text=" A painting in a frame can add a sense of elegance and sophistication to a room, and can also help to preserve the painting by providing a barrier between it and the elements. Frames can be made from a variety of materials, such as wood, metal, or plastic, and come in a range of sizes and styles to suit the painting and the space in which it will be displayed. Framing a painting can also add to its value, especially if the frame is an antique or has historical significance."
            img1={recipe1}/>

            <CategoriesData
            className="popular-products"
            heading="Burger"
            // text=" A painting in a frame can add a sense of elegance and sophistication to a room, and can also help to preserve the painting by providing a barrier between it and the elements. Frames can be made from a variety of materials, such as wood, metal, or plastic, and come in a range of sizes and styles to suit the painting and the space in which it will be displayed. Framing a painting can also add to its value, especially if the frame is an antique or has historical significance."
            img1={recipe2}/>

<CategoriesData
            className="popular-products"
            heading="Soup"
            // text=" A painting in a frame can add a sense of elegance and sophistication to a room, and can also help to preserve the painting by providing a barrier between it and the elements. Frames can be made from a variety of materials, such as wood, metal, or plastic, and come in a range of sizes and styles to suit the painting and the space in which it will be displayed. Framing a painting can also add to its value, especially if the frame is an antique or has historical significance."
            img1={recipe3}/>

<CategoriesData
            className="popular-products"
            heading="MoMo"
            // text=" A painting in a frame can add a sense of elegance and sophistication to a room, and can also help to preserve the painting by providing a barrier between it and the elements. Frames can be made from a variety of materials, such as wood, metal, or plastic, and come in a range of sizes and styles to suit the painting and the space in which it will be displayed. Framing a painting can also add to its value, especially if the frame is an antique or has historical significance."
            img1={recipe4}/>

<CategoriesData
            className="popular-products"
            heading="Fried Rice"
            // text=" A painting in a frame can add a sense of elegance and sophistication to a room, and can also help to preserve the painting by providing a barrier between it and the elements. Frames can be made from a variety of materials, such as wood, metal, or plastic, and come in a range of sizes and styles to suit the painting and the space in which it will be displayed. Framing a painting can also add to its value, especially if the frame is an antique or has historical significance."
            img1={recipe5}/>

<CategoriesData
            className="popular-products"
            heading="Pasta"
            // text=" A painting in a frame can add a sense of elegance and sophistication to a room, and can also help to preserve the painting by providing a barrier between it and the elements. Frames can be made from a variety of materials, such as wood, metal, or plastic, and come in a range of sizes and styles to suit the painting and the space in which it will be displayed. Framing a painting can also add to its value, especially if the frame is an antique or has historical significance."
            img1={recipe6}/>

            


        </div>

        

    )
}
export default Popular