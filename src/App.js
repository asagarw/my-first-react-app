import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "asagarw", name: "Ashish", age: 32 },
      { id: "nehab", name: "Neha", age: 29 },
      { id: "aahanaa", name: "Aahana", age: 4 }
    ],
    otherState: "Let this be other state which will not be set",
    togglePersons: false
  };

  swapNameHandler = newName => {
    console.log("button clicked!!");
    this.setState({
      persons: [
        { name: newName, age: 32 },
        { name: "Neha", age: 29 },
        { name: "Aahana", age: 3 }
      ]
    });
  };

  // nameChangedHandler = event => {
  //   this.setState({
  //     persons: [
  //       { name: event.target.value, age: 32 },
  //       { name: event.target.value, age: 32 },
  //       { name: event.target.value, age: 32 }
  //     ]
  //   });
  // };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return id === person.id;
    });

    let persons = [...this.state.persons];
    const person = persons[personIndex];
    person.name = event.target.value;

    this.setState({
      persons: persons
      // persons: [
      //   { name: event.target.value, age: 32 },
      //   { name: event.target.value, age: 32 },
      //   { name: event.target.value, age: 32 }
      // ]
    });
  };

  togglePersonsHandler = () => {
    console.log("Toggle");
    this.setState({
      togglePersons: !this.state.togglePersons
    });
  };

  deletePersonHandler = index => {
    console.log("delete " + index);

    //beow should not be user as we are mutating state
    // const persons = this.state.persons;
    // persons.splice(index, 1);
    // this.setState({ persons: persons });

    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let person = null;

    if (this.state.togglePersons) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                click={this.deletePersonHandler.bind(this, index)}
                name={person.name}
                age={person.age}
                type={event => {
                  this.nameChangedHandler(event, person.id);
                }}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1> Testing my app </h1>
        <h2> Testing 10%3 is {10 % 3} </h2>
        <button style={style} onClick={() => this.swapNameHandler("Ashu")}>
          Swap Name
        </button>{" "}
        {/*this syntax is inefficient to pass method param on click*/}
        <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {person}
        {/*
            
            { this.state.togglePersons ? 
                    <div>
                        <Person 
                            name={this.state.persons[0].name} 
                            age={this.state.persons[0].age} />
                        <Person 
                            name={this.state.persons[1].name} 
                            age={this.state.persons[1].age}
                            click={this.swapNameHandler.bind(this, 'ashuji')}
                            type={this.nameChangedHandler}>I love eating out @ <a href="">Dwarka</a></Person>
                        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
                </div> : null }*/}
      </div>
    );

    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Testing my App!!'), React.createElement('h2', null, 'Testing save!!'));
  }
}

export default App;
