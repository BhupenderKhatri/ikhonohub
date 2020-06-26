import React from 'react' ;
import {doubt} from './Quesdata'; 
import Questions from './Questions' ;
import {AiOutlineSearch} from "react-icons/ai";
import "./QnA.css" ;
const QuesAns =()=>{
    return( 
        <div>
            <div id="q_ans_main"> 
           
               <input placeholder="Search all course Ques here" id='searchbar'></input>
            <AiOutlineSearch id="searchicon"/>

            <table>
                <tr>
                    <td>
                        <select name="Lectures" id="first">
                            <option value="All Lectures" selected="selected">All Leactures </option>
                            <option value="Current Lectures">Current Lecture </option>

                        </select>
                    </td>

                    <td>
                        <select name="Sorting" id="second">
                            <option value="Recent" selected="selected">Sort By Most Recent</option>
                            <option value="Upvoted">Sort By Most Upvoted</option>
                            <option value="Recommended">Sort By Recommended </option>

                        </select>
                    </td> <td>
                        <select name="Questions" id="third">
                            <option value="Iam" selected="selected">Questions I'm following</option>
                            <option value="Iasked">Questions I asked</option>
                            <option value="Irespond">Quesions I respond</option>

                        </select>

                    </td>
                    
                    <td></td>
                </tr>
            </table>
            <div id="qnabackground">
            {  
           
              
                doubt.map((user,i)=> {
                    return(
                        <div class="q_a_names">
                        <Questions
                        name={doubt[i].name}
                        ques={doubt[i].ques}
                        answer={doubt[i].answer}
                        /></div>
                    );
                })
                 
            }
           <hr class="qna_borderline" color="#FF3300" ></hr> 
            <button id="qnaseemore">SEE MORE</button>
            </div>
            
            </div>
        </div>

    );
} 
export default QuesAns ;