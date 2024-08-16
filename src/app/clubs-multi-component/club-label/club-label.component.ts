import { Component, Input, OnInit } from '@angular/core';
import { IClubsData } from '../iclubs-data';
import { cp } from 'fs';

@Component({
  selector: 'app-club-label',
  standalone: true,
  imports: [],
  templateUrl: './club-label.component.html',
  styleUrl: './club-label.component.css'
})
export class ClubLabelComponent{
  @Input() Clubs!: IClubsData[];
}
