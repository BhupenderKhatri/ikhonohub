import React , { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';



import CourseCurriculumn from './components/course_details/course_curriculum';
import Cart from './components/cart/cart';
import 'tachyons';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
     
    <App />


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
