import { Component, OnInit } from '@angular/core';
import { HomeEventCardData } from '../../Events-multi-component/home-event-card-data';

@Component({
  selector: 'app-popular-events-cards',
  standalone: true,
  imports: [],
  templateUrl: './popular-events-cards.component.html',
  styleUrl: './popular-events-cards.component.css'
})
export class PopularEventsCardsComponent implements OnInit {

  events: HomeEventCardData[];

  constructor() {
    this.events = [
      {
        EventId: 1,
        Eventimg: './assets/image/Event_cards.jpeg',
        EventName: 'Microsoft Student Summit 1',
        Eventcontant: 'Students get connected to +20 workshops in different Microsoft Technologies',
        EventRoute: 'event-details'
      },

      {
        EventId: 2,
        Eventimg: './assets/image/Event_cards.jpeg',
        EventName: 'Microsoft Student Summit 2',
        Eventcontant: 'Students get connected to +20 workshops in different Microsoft Technologies',
        EventRoute: 'event-details'
      },

      {
        EventId: 3,
        Eventimg: './assets/image/Event_cards.jpeg',
        EventName: 'Microsoft Student Summit 3',
        Eventcontant: 'Students get connected to +20 workshops in different Microsoft Technologies',
        EventRoute: 'event-details'
      },

      {
        EventId: 4,
        Eventimg: './assets/image/Event_cards.jpeg',
        EventName: 'Microsoft Student Summit 4',
        Eventcontant: 'Students get connected to +20 workshops in different Microsoft Technologies',
        EventRoute: 'event-details'
      },

      {
        EventId: 5,
        Eventimg: './assets/image/Event_cards.jpeg',
        EventName: 'Microsoft Student Summit 5',
        Eventcontant: 'Students get connected to +20 workshops in different Microsoft Technologies',
        EventRoute: 'event-details'
      },

      {
        EventId: 6,
        Eventimg: './assets/image/Event_cards.jpeg',
        EventName: 'Microsoft Student Summit 6',
        Eventcontant: 'Students get connected to +20 workshops in different Microsoft Technologies',
        EventRoute: 'event-details'
      }
    ]

  }
  ngOnInit() {
    for (let i = 0; i < this.events.length; i++) {
      console.log(this.events[i]);
    }
  }
}
