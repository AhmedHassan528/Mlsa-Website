import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommunityComponent } from './community/community.component';
import { ClubsComponent } from './clubs/clubs.component';
import { EventsComponent } from './events/events.component';
import { EventRegistrationComponent } from './Events-multi-component/event-registration/event-registration.component';
import { EventRegistFormComponent } from './Events-multi-component/event-regist-form/event-regist-form.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'community', component: CommunityComponent},
    {path: 'clubs', component: ClubsComponent},
    {path: "registration", component: EventRegistrationComponent},
    {path: "registForm", component: EventRegistFormComponent},
    {path: 'events', component: EventsComponent, children: [
        // {path:"registration", component: EventRegistrationComponent}
    ]}

];
