import React,{Component} from 'react';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';


class App extends Component {
  render(){
    return (
    
      <div className="App">
            <div>
              <Router>
                <Routes />
              </Router>
          </div>
      </div>
    );
  }
}
export default App;
