import React, { Component } from 'react';
import './App.css';
import {Counter} from "./Counter";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counters: [
                {id: 1, value: 0},
                {id: 2, value: 0},
                {id: 3, value: 0},
                {id: 4, value: 0},
            ]
        }
    }
    render() {
        return (
            this.state.counters.map( counter => {
                return (
                <div>
                <Counter key={counter.id} value={counter.value}/>
                </div>
                )
            })
    );
  }
}

export default App;
