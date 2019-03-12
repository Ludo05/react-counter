import React, { Component } from 'react';
import './App.css';
import {Counter} from "./Counter";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counters: [
                {id: 1, value: 0},
                {id: 2, value: 3},
                {id: 3, value: 0},
                {id: 4, value: 0},
            ]
        }
    }

    deleteCounter = counterId => {
        console.log(`Id is: ${counterId}`);
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters: counters})
    };

    addCounter = () => {
        let id = this.state.counters.length + 1;
        const newCounter = {id: id, value: 0};
        this.setState({counters: [...this.state.counters, newCounter]})
    }

    render() {
        return (
            <div>
            {this.state.counters.map( counter => (
                <Counter key={counter.id}
                         value={counter.value}
                         handleRemove={() => this.deleteCounter(counter.id)}
                />
                ))}
                <button onClick={this.addCounter}>Add Button</button>
            </div>

        );
  }
}

export default App;
