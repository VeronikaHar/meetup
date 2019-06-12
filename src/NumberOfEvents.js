import React, { Component } from "react";

class NumberOfEvents extends Component {
    state = {
        eventNumber: 32,
    };

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({ eventNumber: value });
    };

    render() {
        return (
            <div className="NumberOfEvents">
                Show <input className="number-of-events" type="number" placeholder="32" value={this.state.eventNumber} onChange={this.handleChange}></input> events
            </div>
        );
    }
}

export default NumberOfEvents;