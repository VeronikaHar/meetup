import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';

class App extends Component {
  state = {
    events: [],
    lat: null,
    lon: null,
    page: 32
  }

  componentDidMount() {
    this.updateEvents();
  }

  updateEvents = (lat, lon, page) => {
    getEvents(lat, lon, page).then(events => this.setState({ events }));
  }

  componentWillUnmount() {
    this.setState({ events: [], lat: null, lon: null, page: 32 })
  }

  render() {
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;