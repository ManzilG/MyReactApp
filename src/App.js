import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state= {
        persons:[
            {name: "Manzil" ,age:25},
            {name: "Saroj", age: 26}
        ],
        otherstate:"SOme other value"
    }

    switchNameHandler= ()=>{
        console.log("Button was clicked");
        this.setState({
            persons:[
            {name: "Manzil" ,age:50},
            {name: "Saroj", age: 26}
        ]
        })
    };

    nameChangeHandler=(event)=>{
        this.setState({
            persons:[
                {name: "Manzil" ,age:50},
                {name: event.target.value, age: 26}
            ]
        })

    };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
             <p>Hello Manzil Gajurel .. This is your first react app</p>
        </p>

          <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler}>My Hobby is  nothing</Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangeHandler}>My Hobby is  something</Person>
    </div>
    );
  }
}

export default App;
