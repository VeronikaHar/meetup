import React, { Component } from "react";
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';

class Event extends Component {
    state = {
        showDetails: false,
    }

    handleClick = () => {
        this.setState({ showDetails: !this.state.showDetails })
    }

    render() {
        let event = this.props.event,
            address = "Event's location not available. Please contact the event's organizer.",
            button = "Show details",
            going = this.props.event.yes_rsvp_count + " people are going",
            details = "hideDetails";
        if (this.state.showDetails) { details = "showDetails"; button = "Hide details" } else { details = "hideDetails"; button = "Show details" };
        if (event.venue) {
            address = event.venue.name + ", " + event.venue.address_1 + ", " + event.venue.city + ", " + event.venue.localized_country_name
        };
        const data = [],
            colors = ["#9c2222", "#ccc"];
        if (event.rsvp_limit && button === "Hide details") {
            const spotsLeft = event.rsvp_limit - event.yes_rsvp_count;
            data.push({ name: "people going", value: event.yes_rsvp_count }, { name: "slots left", value: spotsLeft });
            going = (<PieChart height={145} width={320}>
                <Pie data={data} cx={75} cy={75} innerRadius={30} outerRadius={40} fill="#8884d8" label>{
                    data.map((entry, index) => <Cell fill={colors[index % colors.length]} />)}
                </Pie>
                <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />
                <Tooltip />
            </PieChart>)
        }
        return (
            <div className="Event">
                <div className="eventDate">{event.local_time} - {event.local_date}</div>
                <div className="eventName">{event.name} </div>
                <div className="groupName">{event.group.name} </div>
                <div className="going">{going}</div>
                <div className={details}>
                    <p className="address" >{address} </p>
                    <div dangerouslySetInnerHTML={{ __html: event.description }} />
                    <a className="link" target="_blank" href={event.link}>Event Link</a>
                </div>
                <button className="details-btn" onClick={this.handleClick}>{button} </button>
            </div>
        );
    }
}

export default Event;