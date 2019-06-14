import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event /> component', () => {
    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event event={
            {
                created: 1557483479000,
                duration: 46800000,
                id: '261346344',
                name: 'Easy Hike : Breitachklamm [13.8km, 350m gain]',
                rsvp_limit: 20,
                date_in_series_pattern: false,
                status: 'upcoming',
                time: 1561005900000,
                local_date: '2019-06-20',
                local_time: '06:45',
                rsvp_close_offset: 'PT18H45M',
                updated: 1558600416000,
                utc_offset: 7200000,
                waitlist_count: 60,
                yes_rsvp_count: 20,
                venue: {
                    id: 26183168,
                    name: 'Munich Hauptbahnhof (Main Station)',
                    lat: 48.14141845703125,
                    lon: 11.557615280151367,
                    repinned: true,
                    address_1: 'Arnulfstraße 15',
                    city: 'München',
                    country: 'de',
                    localized_country_name: 'Germany',
                },
                group: {
                    created: 1389721197000,
                    name: 'Hiking near Munich',
                    id: 12113182,
                    join_mode: 'open',
                    lat: 48.13999938964844,
                    lon: 11.579999923706055,
                    urlname: 'Hiking-near-Munich',
                    who: 'Munich hikers',
                    localized_location: 'München, Germany',
                    state: '',
                    country: 'de',
                    region: 'en_US',
                    timezone: 'Europe/Berlin',
                },
                link: 'https://www.meetup.com/Hiking-near-Munich/events/261346344/',
                description: '<p>Hey y´all</p> <p>Another easy and relaxed one.</p> <p>Hoping the weather will be okay - I would love to go with you! </p> ',
                how_to_find_us: 'Shop at Platforms 27-36',
                visibility: 'public',
            }
        } />);
    });

    test('render event time and date', () => {
        expect(EventWrapper.find('.eventDate')).toHaveLength(1);
    });
    test('render event name', () => {
        expect(EventWrapper.find('.eventName')).toHaveLength(1);
    });
    test('render group name', () => {
        expect(EventWrapper.find('.groupName')).toHaveLength(1);
    });
    test('render people going', () => {
        expect(EventWrapper.find('.going')).toHaveLength(1);
    });
    test('render button that displays event details', () => {
        expect(EventWrapper.find('.details-btn')).toHaveLength(1);
    });
    test('click on details button should expand event details', () => {
        expect(EventWrapper.state('showDetails')).toEqual(false);
        EventWrapper.find('.details-btn').simulate('click');
        expect(EventWrapper.find('.showDetails')).toHaveLength(1);
    });
    test('click on details button should collapse event details', () => {
        expect(EventWrapper.state('showDetails')).toEqual(true);
        EventWrapper.find('.details-btn').simulate('click');
        expect(EventWrapper.find('.hideDetails')).toHaveLength(1);
    });
});