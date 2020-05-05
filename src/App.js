import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  state={
    persons:[
      {name:"Animesh" ,age:20},
      {name:"Kritika" ,age:18},
      {name:"Siddhesh" ,age:10}

    ]
  }

  switchNameHandler=()=>{
   // console.log("was clicked!!")
   //this.state.persons[0].name="Animesh Kumar";
   this.setState({
    persons:[
      {name:"Animesh Kumar" ,age:20},
      {name:"Kritika" ,age:18},
      {name:"Siddhesh" ,age:10}

    ]
  })
  };


  render() {
    return (
    <div className="App">
      <h1>Hi, This is a react app</h1>
      <p>and it is realy working</p>
      <button onClick={this.switchNameHandler}>Change Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbie is to watch movies</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[1].age}/>

    </div>
  );
}}

export default App;
