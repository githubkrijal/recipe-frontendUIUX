import {Component} from 'react';
import "./HomepageCollect.css";
class HomepageInfo extends Component{
render(){
    return(
        <div className={this.props.className}>
                <div className="info-text">
                    <h2> {this.props.heading}</h2>
                    <p> {this.props.text}</p>
                </div>
                <div className="info-img">
                    <img src={this.props.img1} alt="" srcSet=""/>
                    <img src={this.props.img2} alt="" srcSet=""/>
                </div>
            </div>
    )
}
}
export default HomepageInfo;