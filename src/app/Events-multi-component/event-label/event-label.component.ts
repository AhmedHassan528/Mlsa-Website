import { Component, Input } from '@angular/core';
import { HomeEventCardData } from '../home-event-card-data';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-event-label',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './event-label.component.html',
  styleUrl: './event-label.component.css'
})
export class EventLabelComponent {
  @Input() Events!: HomeEventCardData[];
}
