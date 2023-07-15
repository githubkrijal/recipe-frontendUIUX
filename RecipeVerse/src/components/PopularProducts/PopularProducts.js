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
            <h1>Popular Categories</h1>
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

            
            {/* <CategoriesData
            className="popular-products-reverse"
            heading="Glass Painting"
            text="Glass painting is the art of painting on glass surfaces such as windows, doors, vases, and other glass objects. It involves using special paints that are specifically designed for glass surfaces, and techniques such as brush painting, stippling, and sponging. Glass painting can create stunning effects, with the light shining through the glass, illuminating the colors and designs. It is often used for decorative purposes, but can also be used to create functional objects such as stained glass windows."
            img1={glass1}
            img2={glass2}/> */}


        </div>

        

    )
}
export default Popular