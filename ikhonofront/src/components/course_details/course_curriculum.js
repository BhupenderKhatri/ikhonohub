import React,{Component} from 'react';
import './course_curriculum.css';
import CardDark from './curriculumnCardDark';
import CardWhite from './curriculumnCardWhite';
import {coursesHeaderDark} from '../../curricullum_details';
const course_curriculum = () =>{
    return(
        <div>
            <h1>Course Curriculum</h1>
            <p>To make sure this course is good fit for you, you can start learning for free right now.</p>
            <br/>
            <div id="box">{
            coursesHeaderDark.map((rowdata,i,j) => {
                            return(<div>
                                <CardDark 
                                heading={coursesHeaderDark[i].heading}
                                count={coursesHeaderDark[i].count}
                                time={coursesHeaderDark[i].time}
                                />
                                <div>{
                                  (typeof(rowdata.second)=='object')?
                                  <div>
                                      {
                                      rowdata.second.map((subRowData,j) =>
                                      <div>
                                          <CardWhite
                                            heading={subRowData.jheading}
                                            count={subRowData.jcount}
                                            time={subRowData.jtime}
                                          />
                                      </div>
                                      )
                                    }
                                  </div>
                                  :
                                  null
                              }
                              </div>


                                
                                </div>
                            );
                        })
                    }
            </div>
{/*           <div>
           {
            coursesHeaderWhite.map((user,i) => {
                            return(
                                <CardWhite
                                heading={coursesHeaderWhite[i].heading}
                                count={coursesHeaderWhite[i].count}
                                time={coursesHeaderWhite[i].time}
                                />
                            );
                        })
                    } 
                
            </div>
                */}
        </div>
    );
}
export default course_curriculum;