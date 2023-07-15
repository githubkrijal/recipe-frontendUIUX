import './Recipe.css';

// function Recipe(){
//     return(
//         <div className="about-container">
//             <h1> Our History</h1>
//             <p>Our online art store was established in 2020 with a mission to make high-quality art accessible to everyone, everywhere. As a team of art enthusiasts, we recognized the challenges of finding affordable and unique art pieces that can transform any living space. Hence, we set out on a mission to curate a collection of art pieces from talented artists from all around the world and make them available to our customers at competitive prices.</p>
//             <h1>Our Mission</h1>
//             <p>At Artsy, our mission is to provide an easy, enjoyable, and affordable shopping experience for art lovers everywhere. We aim to showcase the works of talented artists from diverse backgrounds and cultures, highlighting their unique perspectives and artistic styles. Our mission is to make sure that every customer who shops with us finds the perfect piece of art that speaks to their personality, style, and aesthetic preferences.</p>
//             <h1>Our Vision</h1>
//             <p>Our vision is to become the go-to destination for art enthusiasts looking for affordable and high-quality art pieces. We envision our online art store to be a platform where artists and customers can connect, interact, and appreciate each other's creativity. We aim to continually grow our collection of artworks, expanding our range of styles, mediums, and techniques. Our vision is to create a community of art lovers and artists, fostering a sense of appreciation and passion for art that transcends cultural, geographical, and socio-economic boundaries.</p>
//         </div>

//     )
// }




import { useNavigate } from 'react-router-dom';
const Recipe=({recipes})=>{
    const navigate=useNavigate();
    const handleClick = () => {
        if (localStorage.getItem('token')) {
            navigate(`/recipes/${recipes._id}`)          
        }
        else {
            navigate('/login')
        }
    }
    return (
        <div className="recipe-card" onClick={handleClick}>
            <div className="thumbnail">
                <img src={"http://localhost:3000"+recipes.image} alt="recipe"/>
                </div>
            <div className="recipe-info">
                <span className="recipe-name">{recipes.recipename}</span>
                {/* <span className="recipe-name">{recipes.ingredients}</span> */}
                <button className='recipe-button fas fa-circle-play'> Watch Now</button>
         
                </div>   
        </div>
        )

}
export default Recipe;