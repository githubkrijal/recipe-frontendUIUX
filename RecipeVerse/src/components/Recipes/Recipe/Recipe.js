import './Recipe.css';
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