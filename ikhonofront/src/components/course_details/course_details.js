import React,{Component} from 'react';
import './course_details.css';
import Intro from './course_intro1' ;
import What_learn from './course_intro2' ;
import Comments from  '../comments/CommentsList' ;
import RightNow from './course_intro3' ;
import Details from './course_intro4' ;
import Questions from './course_intro5' ;

import Card1 from '../prices/priceList';
import axios from 'axios';


class course_details extends Component {

    constructor(props){
        super(props);
        this.state={
            intro:[],
            instructor:[],
            what_you_learn:[],
            why_course:[],
            full_details:[],
            answer_to_questions:[]
        }
      
    }

    componentDidMount(){
        this.getItems();
      }
    


      getItems =()=>{
        const headers = {
          
            "Content-Type": "application/json"
        }
        const id = { id :1234};
       axios.post('http://localhost:5000/course_chapter/cardinfodetail/intro',id,{headers: headers}).then(res => {
          
        const data = res.data;
        this.setState({intro:data})
        })
        axios.post('http://localhost:5000/course_chapter/cardinfodetail/whatyoulearn',id,{headers: headers}).then(res => {
          
            const data = res.data;
            this.setState({what_you_learn:data})
            })
            axios.post('http://localhost:5000/course_chapter/cardinfodetail/instructor',id,{headers: headers}).then(res => {
          
                const data = res.data;
                this.setState({instructor:data})
                })
                axios.post('http://localhost:5000/course_chapter/cardinfodetail/why_course',id,{headers: headers}).then(res => {
          
                    const data = res.data;
                    this.setState({why_course:data})
                    })
                    axios.post('http://localhost:5000/course_chapter/cardinfodetail/full_details',id,{headers: headers}).then(res => {
          
                        const data = res.data;
                        this.setState({full_details:data})
                        })
                        axios.post('http://localhost:5000/course_chapter/cardinfodetail/answer_to_questions',id,{headers: headers}).then(res => {
          
                            const data = res.data;
                            this.setState({answer_to_questions:data})
                            })
                        
       }
      

    render(){

        const { intro,what_you_learn ,why_course,full_details,answer_to_questions} = this.state;
     return(
       <div>
          <table id="finalset">
              <tr>
                  <td id="first">
             <div id='details'>
                <div>{
                    intro.map((user,i) => {
                            return(
                                <Intro
                                    head={intro[i].heading}
                                    para={intro[i].paragraph}
                                    subtitle={intro[i].subtitle}
                                    creator ={intro[i].creator}
                                />
                            );
                        })
                    }
                </div> 
                  {/* <div id="second">
                      {
                          <Card1/>
                      }
                  </div> */}
                <div>
                    {
                        what_you_learn.map((user,i)=>{
                            return(
                                <What_learn
                                point1={what_you_learn[i].point1}
                                point2={what_you_learn[i].point2}
                                point3={what_you_learn[i].point3}
                                point4={what_you_learn[i].point4}
                                point5={what_you_learn[i].point5}
                                />
                            );
                        })
                    }
                </div>
                <div>
                     <Comments/>
                </div>

                <div>
                    {
                        why_course.map((user,i)=>{
                            return(
                                <RightNow
                                 head={why_course[i].heading}
                                 para1={why_course[i].para1}
                                 para2={why_course[i].para2}
                                />
                            );
                        })
                    }
                </div>

                <div>
                    {
                        full_details.map((user,i)=>{
                            return(
                                <Details 
                                 
                                 para1={full_details[i].para1}
                                 para2={full_details[i].para2}
                                 list1={full_details[i].list1}
                                 list2={full_details[i].list2}
                                />
                            );
                        })
                    }
                </div>
                <div>
                    {
                        answer_to_questions.map((user,i)=>{
                            return(
                                <Questions
                                  ques1={answer_to_questions[i].ques1}
                                  ques2={answer_to_questions[i].ques2}
                                  ques3={answer_to_questions[i].ques3}
                                  ans1={answer_to_questions[i].ans1}
                                  ans3={answer_to_questions[i].ans3}
                                  point1={answer_to_questions[i].point1}
                                  point2={answer_to_questions[i].point2}
                                  point3={answer_to_questions[i].point3}
                                />
                            );
                        })
                    }
                </div>
               
                
            </div></td>
                  <td id="second">
                      
                      
                     
                  </td>
              </tr>
          </table>
       

        </div>    
        );
}
}

export default course_details;