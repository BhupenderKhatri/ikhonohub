import React from 'react';

const Intro = ({head,para}) => {
    return (
      <div>
          <h2>{head}</h2>
          <br/>
          <p>{para}</p>
      </div>
    );
  }

  const Why_course = ({head,para}) => {
    return (
      <div>
        
          <h2>{head}</h2>
          <br/>
          <p>{para}</p>
      </div>
    );
  }

  const Full_course = ({head,para}) => {
    return (
      <div>
        
          <h2>{head}</h2>
          <br/>
          <p>{para}</p>
      </div>
    );
  }

  const Faq = ({head,para}) => {
    return (
      <div>
        
          <h2>{head}</h2>
          <br/>
          <p>{para}</p>
      </div>
    );
  }

  export default (Intro , Why_course, Full_course,Faq);