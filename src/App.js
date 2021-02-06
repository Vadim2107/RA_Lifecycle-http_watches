import React from 'react';
import './App.css';
import Watches from './components/Watches';

class App extends React.Component {
  
  render() {
    
    return (
      <React.Fragment>
        <Watches />        
      </React.Fragment>                
    );
  }
}

export default App;
