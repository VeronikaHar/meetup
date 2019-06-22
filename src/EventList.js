import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {
    render() {
        const events = this.props.events.sort((a, b) => {
            // convert date object into number to resolve issue in typescript
            return +new Date(a.local_date) - +new Date(b.local_date);
        });
        return (
            <ul className="EventList">
                {events.map(event => <li key={event.id}> <Event event={event} /> </li>)}
            </ul>
        );
    }
}

export default EventList;