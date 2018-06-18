import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Ashish', age: 32 },
            { name: 'Neha', age: 29 },
            { name: 'Aahana', age: 4 }
        ],
        otherState: 'Let this be other state which will not be set',
        togglePersons: false
    };

    swapNameHandler = (newName) => {
        console.log('button clicked!!');
        this.setState({
            persons: [
                { name: newName, age: 32 },
                { name: 'Neha', age: 29 },
                { name: 'Aahana', age: 3 }
            ]
        });
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: event.target.value, age: 32 },
                { name: event.target.value, age: 32 },
                { name: event.target.value, age: 32 }
            ]
        });
    }

    togglePersonsHandler = () => {
        console.log('Toggle');
        this.setState({
            togglePersons: !this.state.togglePersons
        });
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }

        return ( 
            <div className = "App" >
                <h1> Testing my app </h1> 
                <h2> Testing 10%3 is {10%3} </h2>
                <button style={style} onClick={() => this.swapNameHandler('Ashu')}>Swap Name</button> {/*this syntax is inefficient to pass method param on click*/}
                <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
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
                    </div> : null }
            </div>
        );

        // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Testing my App!!'), React.createElement('h2', null, 'Testing save!!'));
    }   
}

export default App;