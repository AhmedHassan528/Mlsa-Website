import { Component, OnInit } from '@angular/core';
import { ClubLabelComponent } from '../clubs-multi-component/club-label/club-label.component';
import { IClubsData } from '../clubs-multi-component/iclubs-data';
import { HeaderComponent } from '../generalComponents/header/header.component';
import { ClubFilterComponent } from '../clubs-multi-component/club-filter/club-filter.component';

@Component({
  selector: 'app-clubs',
  standalone: true,
  imports: [ClubLabelComponent, HeaderComponent, ClubFilterComponent],
  templateUrl: './clubs.component.html',
  styleUrl: './clubs.component.css'
})
export class ClubsComponent {
  ClubsData: IClubsData[] = [];
  constructor() {
    this.ClubsData = [
      {
        ClubID: 1,
        ClubName: 'Club 1',
        ClubImg: './assets/image/mlsa_withBackground.jpeg',
        ClubLocation: 'Location 1',
        ClubCreationDate: '01/01/2021',
        ClubMembers: 10,
        ClubPresident: 'President 1',
        ClubAbout: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at ipsum numquam soluta. Nihil nobis necessitatibus eaque dolorum veniam aspernatur'
      },
      {
        ClubID: 2,
        ClubName: 'Club 2',
        ClubImg: './assets/image/mlsa_withBackground.jpeg',
        ClubLocation: 'Location 2',
        ClubCreationDate: '02/02/2021',
        ClubMembers: 20,
        ClubPresident: 'President 2',
        ClubAbout : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at ipsum numquam soluta. Nihil nobis necessitatibus eaque dolorum veniam aspernatur"
      }
      ,
      {
        ClubID: 3,
        ClubName: 'Club 3',
        ClubImg: './assets/image/mlsa_withBackground.jpeg',
        ClubLocation: 'Location 3',
        ClubCreationDate: '02/02/2021',
        ClubMembers: 20,
        ClubPresident: 'President 3',
        ClubAbout : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at ipsum numquam soluta. Nihil nobis necessitatibus eaque dolorum veniam aspernatur"
      }
      ,
      {
        ClubID: 4,
        ClubName: 'Club 4',
        ClubImg: './assets/image/mlsa_withBackground.jpeg',
        ClubLocation: 'Location 4',
        ClubCreationDate: '02/02/2021',
        ClubMembers: 20,
        ClubPresident: 'President 4',
        ClubAbout : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at ipsum numquam soluta. Nihil nobis necessitatibus eaque dolorum veniam aspernatur"
      }
    ];
  }

  OnInit() {
    for (let i = 0; i < this.ClubsData.length; i++) {
      console.log(this.ClubsData[i]);
    }
  }
}

