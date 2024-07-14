import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';


export class App extends Component {
  render() {
    return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        
      </div>
    </>  
    );
  }
}

export default App;