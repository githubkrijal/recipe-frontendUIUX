import HomepageInfo from "./HomepageInfo";
import "./HomepageCollect.css";
import product1 from "../../images/recipecate1.jpeg";
import product2 from "../../images/recipecate2.jpeg"
import glass1 from "../../images/recipecate3.jpeg";
import glass2 from "../../images/recipecate4.jpeg";

const HomeEx=({products})=>{
    return(
        <div className="infosection">
            <h1>Learning Cooking Just Got Easier!</h1>
            <p>Learn how to cook at the comfort of your kitchen because ReciperVerse brings you your favorite dish recipe. Now start cooking what you want to eat.</p>
            <HomepageInfo
            className="infosection-products"
            heading={<h2 className="red-heading">Unleash Your Inner Chef</h2>}
            text=" The ultimate destination for culinary enthusiasts and aspiring home chefs. Whether you're a beginner looking to enhance your cooking skills or an experienced cook seeking fresh inspiration, we're here to empower you on your culinary journey."
            img1={product1}
            img2={product2}/>
            <HomepageInfo
            className="infosection-products-reverse"
            heading={<h2 className="red-heading">From Inspiration to Delicious Creation</h2>}
            text="Discover a world of mouthwatering recipes, step-by-step tutorials, and expert cooking tips all in one place. Whether you're a novice cook or a seasoned chef, our platform provides the perfect opportunity to expand your culinary repertoire. But that's not all - we go the extra mile by allowing you to purchase the ingredients you need right from our website."
            img1={glass1}
            img2={glass2}/>
        </div>

    )
}
export default HomeEx