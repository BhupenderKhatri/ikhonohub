import React from 'react';
import { FaStar } from 'react-icons/fa';
import './TrendingCourses.css';
import { IoIosCart } from 'react-icons/io';
import { FaPlay } from 'react-icons/fa';
import axios from 'axios';


function addItems(props){
                                 

    const headers = {
        
      "Content-Type": "application/json"
                }
  const id = { id :this.props.id};
  axios.post('http://localhost:5000/cartcardadd',id,{headers: headers});
  
  
  }

const Trendingcourses = ({ image, name, heading, rating, userimg }) => {
    return (



        <div id="trendingcoursesbase">
            <img id="trendingupperimage" src={image} alt='error 404 not found'></img>
            

                <h4 id="trendingheading">{heading}</h4>

                <div id="trendingcreatorinfo" >
                   
                            <img id="trendingcreatorimage" src={userimg} alt='error 404 not found'></img>   
                             <div id="trendingrating">
                                <FaStar
                                    color={rating >= 1 ? "#ffd700" : "#848484"}
                                />
                                <FaStar
                                    color={rating >= 1 ? "#ffd700" : "#848484"}
                                />
                               <FaStar
                                    color={rating >= 1 ? "#ffd700" : "#848484"}
                                />
                               <FaStar
                                    color={rating >= 1 ? "#ffd700" : "#848484"}
                                />
                                <FaStar
                                    color={rating >= 1 ? "#ffd700" : "#848484"}
                                />
                                <div id="trendingcardrating">{rating}</div>
                            </div>
                            <h4 id="trendingcreatorname">{name}</h4>

                         <div class="trending_btn">   <button id="trendingcart" onClick={()=>addItems()}  ><IoIosCart /></button>
                         <button id="trendingplay"><FaPlay /></button></div>
                        
                </div>

        </div>
    );

}

export default Trendingcourses;