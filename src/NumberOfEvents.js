import React, { Component } from "react";
import { ErrorAlert, WarningAlert } from './Alert';

class NumberOfEvents extends Component {
    state = {
        eventNumber: 32,
        errorText: "",
        warningText: ""
    };

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({ eventNumber: value });
        if (navigator.onLine) { localStorage.setItem('lastNumber', JSON.stringify(value)); }
        if (value < 1) {
            this.setState({ errorText: "Event number should be at least 1." })
        } else {
            this.props.updateEvents(null, null, value);
            this.setState({ errorText: "" });
        }
        if (!navigator.onLine) {
            this.setState({ warningText: "You are offline and the number of events displayed can't be changed." });
        } else {
            this.setState({ warningText: "" })
        }
    };

    componentDidMount() {
        let value = JSON.parse(localStorage.getItem('lastNumber'));
        if (value && !navigator.onLine) {
            this.setState({ eventNumber: value });
        } else {
            this.setState({ eventNumber: 32 });
        }
    }

    render() {
        return (
            <div className="NumberOfEvents">
                Show <input className="number-of-events" type="number" value={this.state.eventNumber} onChange={this.handleChange}></input> events
                <ErrorAlert text={this.state.errorText} />
                <WarningAlert text={this.state.warningText} />
            </div>
        );
    }
}

export default NumberOfEvents;