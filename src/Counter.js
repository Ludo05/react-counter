import React from 'react'
import './App.css';
export class Counter  extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        }
    }
     handleButton = () => {
        this.setState({
            value: this.state.value + 1
        })

    };

    getClass = () => {
        let classes = 'p-small-'
        classes += this.state.value % 2 === 0 ?  'normal' : 'bold';
        return classes;
    }

    render() {
        return (
            <div>
            <button onClick={this.handleButton}>Click Me</button>
            <button onClick={() => this.props.handleRemove(this.props.id)}>Delete</button>
            <p className={this.getClass()}>{this.state.value}</p>
            </div>
        );
    }

}