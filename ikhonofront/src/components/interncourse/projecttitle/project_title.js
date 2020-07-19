import React ,{Component}from 'react';
import './projecttitle.css';

class Projecttitle extends Component{
    render(){
      
      return (
          
<div class="project_main">
    <h1 id="project_heading">Project Title</h1>
   
 <div class="project_title">
    <div id="project1">
        <h3 id="title_head1">1. Speech Recognition</h3>
        <p id="title_para1">Build a model that can<br></br> recognize English speech<br></br> and convert it to Text<br></br> using Natural Language<br></br> Processing.</p>
    </div>
           
           
            <div id="project2">
                <h3 id="title_head1">2.Face Detection</h3>
                <p id="title_para1">Make your machine learn<br></br> to detect and identify<br></br> faces using machine<br></br> learning and computer <br></br>vision</p>
            </div>
                   
                   
                    <div id="project1">
                        <h3 id="title_head1">3.Chat Bot</h3>
                        <p id="title_para1">Build a chatbot that can<br></br> mimic a real human and <br></br>can talk to anyone<br></br> through chat.</p>
                    </div>
                               
                               
                                <div id="project2">
                                    <h3 id="title_head1">4.Speech to Text</h3>
                                    <p id="title_para1">Convert the speech or <br></br>audio to text using AI <br></br>models which were taught <br></br>in the speech to text<br></br> session.</p>
                                </div>
   </div>
</div>

        );
    }
    }
    
    export default Projecttitle;