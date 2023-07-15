import {Component} from 'react';
import "./PopularProducts.css";
class CategoriesData extends Component{
render(){
    return(
        
        <div className={this.props.className}>
              <div className="pro-img">
                    <img src={this.props.img1} alt="" srcSet=""/>
                  
                </div>
                <div className="pro-text">
                    <h2> {this.props.heading}</h2>
                    {/* <p> {this.props.text}</p> */}
                </div>
              
            </div>
    )
}
}
export default CategoriesData;