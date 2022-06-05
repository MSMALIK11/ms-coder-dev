import React from 'react';
import '../styles/postcard/postcard.scss';
import food from '../images/food-1.jpeg';


import {Link} from 'react-router-dom';

const Category = () => {
    return (
        <div>

            <div className="cat-wraper mt-5">


                <ul>
                  
                    <li>
                       <div className="inner">
                       <div className="thumbnail">
                        <img src={food} alt=""  className="img-thumbnail" />
                        </div>
                        <div className="content">
                            <Link  style={{textDecoration:'none',color:'inherit'}} 
                            to={`/?category=web-design`}><h5>web design</h5></Link>
                            
                        </div>
                       </div>
                        </li>
                    <li>
                        <div className="inner">
                        <div className="thumbnail">
                        <img src={food} alt=""  className="img-thumbnail" />
                        </div>
                        <div className="content">
                        <Link style={{textDecoration:'none',color:'inherit'}} to={`/?category=life-style`}><h5>life-style</h5></Link>
                        </div>
                        </div>
                        </li>
                  
                   

                </ul>
               <ul>
               <li>
                       <div className="inner">
                       <div className="thumbnail">
                        <img src={food} alt=""  className="img-thumbnail" />
                        </div>
                        <div className="content">
                        <Link style={{textDecoration:'none',color:'inherit'}} to={`/?category=technology`}><h5>technology</h5></Link>
                        </div>
                       </div>
                        </li>
                    <li>
                       <div className="inner">
                       <div className="thumbnail">
                        <img src={food} alt=""  className="img-thumbnail" />
                        </div>
                        <div className="content">
                            <h5>UI</h5>
                        </div>
                       </div>
                        </li>
               </ul>
            </div>
            
        </div>
    )
}

export default Category
