import HomepageInfo from "./HomepageInfo";
import "./HomepageCollect.css";
import product1 from "../../images/product1.jpg";
import product2 from "../../images/product3.jpg"
import glass1 from "../../images/glass1.jpg";
import glass2 from "../../images/glass2.png";

const HomeEx=({products})=>{
    return(
        <div className="infosection">
            <h1>Learning cooking just got easier!</h1>
            <p>Learn how to cook at the comfort of your kitchen because ReciperVerse brings you your favorite dish recipe. Now start cooking what you want to eat.</p>
            <HomepageInfo
            className="infosection-products"
            heading="Unleash Your Inner Chef"
            text=" The ultimate destination for culinary enthusiasts and aspiring home chefs. Whether you're a beginner looking to enhance your cooking skills or an experienced cook seeking fresh inspiration, we're here to empower you on your culinary journey."
            img1={product1}
            img2={product2}/>
            <HomepageInfo
            className="infosection-products-reverse"
            heading="From Inspiration to Delicious Creation"
            text="Discover a world of mouthwatering recipes, step-by-step tutorials, and expert cooking tips all in one place. Whether you're a novice cook or a seasoned chef, our platform provides the perfect opportunity to expand your culinary repertoire. But that's not all - we go the extra mile by allowing you to purchase the ingredients you need right from our website."
            img1={glass1}
            img2={glass2}/>
        </div>

    )
}
export default HomeEx