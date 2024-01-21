import React from "react";
import axios from 'axios';
import './App.css'

class App extends React.Component{

   state ={
    advice:''
    
  };

  componentDidMount(){
   this.featchdata();
  }
  
  featchdata =()=>{
    axios.get('https://api.adviceslip.com/advice')
    .then((response) =>{
      const {advice} = response.data.slip;
    
      this.setState ({
        advice});
    })
    .catch((error) =>{
       console.log(error);
    })
  }
render(){
  const {advice} = this.state;
return(
 
  
  <div className="app">
   <h1>ADVICES</h1>
 <div className="card">
  <h3 className="header">{advice}</h3>
  <button className="ff" onClick={this.featchdata}><span>
    NEXT </span></button>
  </div>
  </div>
)
  

}
}


export default App;