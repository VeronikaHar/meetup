import React, { Component } from "react";
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
    state = {
        eventNumber: 32,
        errorText: ""
    };

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({ eventNumber: value });
        this.props.updateEvents(null, null, value);

        if (value < 1) {
            this.setState({ errorText: "Event number should be at least 1." })
        } else {
            this.setState({ errorText: "" });
        }
    };

    render() {
        return (
            <div className="NumberOfEvents">
                Show <input className="number-of-events" type="number" value={this.state.eventNumber} onChange={this.handleChange}></input> events
                <ErrorAlert text={this.state.errorText} />
            </div>
        );
    }
}

export default NumberOfEvents;