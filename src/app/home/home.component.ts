import { Component } from '@angular/core';
import { PopularEventsCardsComponent } from '../home-multi-component/popular-events-cards/popular-events-cards.component';
import { WeProvideCardsComponent } from '../home-multi-component/we-provide-cards/we-provide-cards.component';
import { CountUpComponent } from '../generalComponents/count-up/count-up.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PopularEventsCardsComponent,WeProvideCardsComponent, CountUpComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
