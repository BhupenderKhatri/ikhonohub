import React from 'react' 
import {AiOutlineSearch} from "react-icons/ai";
import "./QnA.css" ;

const Qna =({name,ques,answer}) =>{
    return(
       
        <div classname="bg-white">
            
       <table id="table">
        <tr>
          {name}
        </tr>
        <tr>
            {ques}
        </tr>
        <tr>
           {answer}
        </tr>
       </table>   
           
       
           
           
           
            </div>


    );
}
export default Qna ;