import { Component } from '@angular/core';
import { LeadersLabelComponent } from '../community-multi-component/leaders-label/leaders-label.component';
import { ICommunityLeaderData } from '../community-multi-component/Icommunity-leader-data';
import { HeaderComponent } from '../generalComponents/header/header.component';
import { CommunityFilterComponent } from '../community-multi-component/community-filter/community-filter.component';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [LeadersLabelComponent, HeaderComponent, CommunityFilterComponent],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css'
})
export class CommunityComponent {
  Leaders: ICommunityLeaderData[];

  constructor() {
    this.Leaders = [
      {
        Id: 1,
        LeaderName: 'John Doe',
        LeaderEmail: 'test@test.com',
        LeaderImg: './assets/image/com.headerphoto.png',
        LeaderMLSALogo: 'https://via.placeholder.com/150',
        Role: "BETA",
        JoinDate: '01/01/2021',
        LeaderNationality: 'Egyption',
        LeaderCountry: 'ASSUIT',
        LeaderUniversity: 'ASSUIT UNIVERSITY',
        LeaderAbout: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        Id: 2,
        LeaderName: 'ahmed Hassan',
        LeaderEmail: 'test@test.com',
        Role: "BETA",

        LeaderImg: './assets/image/com.headerphoto.png',
        LeaderMLSALogo: 'https://via.placeholder.com/150',
        JoinDate: '01/01/2021',
        LeaderNationality: 'Egyption',
        LeaderCountry: 'ASSUIT',
        LeaderUniversity: 'ASSUIT UNIVERSITY',
        LeaderAbout: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },{
        Id: 3,
        LeaderName: 'John Doe',
        LeaderEmail: 'test@test.com',
        Role: "BETA",
        LeaderImg: './assets/image/com.headerphoto.png',
        LeaderMLSALogo: 'https://via.placeholder.com/150',
        JoinDate: '01/01/2021',
        LeaderNationality: 'Egyption',
        LeaderCountry: 'ASSUIT',
        LeaderUniversity: 'ASSUIT UNIVERSITY',
        LeaderAbout: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ]
  }
}
