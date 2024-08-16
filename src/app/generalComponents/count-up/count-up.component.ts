import { Component, Input } from '@angular/core';
import { interval } from 'rxjs';
import { map, take, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-count-up',
  standalone: true,
  imports: [],
  templateUrl: './count-up.component.html',
  styleUrl: './count-up.component.css'
})
export class CountUpComponent {
  @Input() start:number = 0;
  @Input() end:number = 3000;
  @Input() duration:number = 5000;

  currentCount: number = this.start;

  ngOnInit(): void {
    const intervalTime = 10; // Update every 10ms for smooth animation
    const totalSteps = (this.duration * 1000) / intervalTime;

    interval(intervalTime).pipe(
      take(totalSteps),
      // Applying easing in the map function
      map(step => {
        const t = step / totalSteps;
        const easedT = t * t * (3 - 2 * t); // Ease-in-out function (cubic)
        return Math.round(this.start + easedT * (this.end - this.start));
      }),
      startWith(this.start)
    ).subscribe(value => this.currentCount = value);
  }
}
