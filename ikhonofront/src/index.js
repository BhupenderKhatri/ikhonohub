import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import  InternCareerDev from './components/interncourse/intern_UXUI';
import  InternCareerDev1 from './components/interncourse/intern_WebDev';
import  InternCareerDev2 from './components/interncourse/intern_IOS';
import  InternCareerDev3 from './components/interncourse/intern_Python';
import  InternCareerDev4 from './components/interncourse/Intern_CareerDev';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
     
    <App/>
    

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
