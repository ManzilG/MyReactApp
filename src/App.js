import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            {name: "Manzil", age: 25},
            {name: "Saroj", age: 26}
        ],
        otherstate: "SOme other value",
        showPersons: false
    }

    switchNameHandler = () => {
        console.log("Button was clicked");
        this.setState({
            persons: [
                {name: "Manzil", age: 50},
                {name: "Saroj", age: 26}
            ]
        })
    };

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: "Manzil", age: 50},
                {name: event.target.value, age: 26}
            ]
        })

    };

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});

    } ;

        render()
        {

            const style = {
                backgroundColor: 'white',
                font: 'inherit',
                border: '5px solid blue',
                padding: '8px'

            };

            let persons=null;

            if(this.state.showPersons){
                persons=(<div>
                    <Person name={this.state.persons[0].name} age={this.state.persons[0].age}
                            click={this.switchNameHandler}>My Hobby is nothing</Person>
                    <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
                            changed={this.nameChangeHandler}>My Hobby is something</Person>
                </div>);
            }

            return (
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <p className="App-intro">
                        <p>Hello Manzil Gajurel .. This is your first react app</p>
                    </p>

                    <button style={style} onClick={this.togglePersonHandler}>Toggle Name</button>
                    {persons}
                </div>
            );
        }
    }


export default App;
