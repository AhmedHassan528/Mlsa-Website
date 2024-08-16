import { Component, Input, OnInit } from '@angular/core';
import { ICommunityLeaderData } from '../Icommunity-leader-data';

@Component({
  selector: 'app-leaders-label',
  standalone: true,
  imports: [],
  templateUrl: './leaders-label.component.html',
  styleUrl: './leaders-label.component.css'
})
export class LeadersLabelComponent implements OnInit {
  @Input() Leaders!: ICommunityLeaderData[];

  constructor() {
    
  }
  ngOnInit(): void {
    for (let i = 0; i < this.Leaders.length; i++) {
      console.log( "Child" +this.Leaders[i]);
    }
  }

  
}
