import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Aman", age: "22" },
      { id: 2, name: "Arnav", age: "13" },
      { id: 3, name: "Arun", age: "51" }
    ],
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonsHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let people = null;
    if (this.state.showPersons) {
      people = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                click={() => this.deletePersonsHandler(index)}
                name={person.name}
                age={person.age}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = "red";
    }

    return (
      <div className="App">
        <h1>This is a react app</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonHandler}>
          Toggle People
        </button>
        {people}
      </div>
    );
  }
}

export default App;
