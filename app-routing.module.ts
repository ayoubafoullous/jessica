import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AboutEventComponent } from './pages/about-event/about-event.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { Agenda2Component } from './pages/agenda2/agenda2.component';
import { AttendeeDetailComponent } from './pages/attendee-detail/attendee-detail.component';
import { AttendeeDirectoryComponent } from './pages/attendee-directory/attendee-directory.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { MessageComponent } from './pages/message/message.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SponsorAttendeesComponent } from './pages/sponsor-attendees/sponsor-attendees.component';
import { SponsorsComponent } from './pages/sponsors/sponsors.component';

const APPLAYOUT_ROUTES: Routes = [  
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "agenda",
    component:AgendaComponent
  },
  {
    path: "agenda2",
    component:Agenda2Component
  },
  {
    path: "attendee-directory",
    component:AttendeeDirectoryComponent
  },
  {
    path: "attendee-directory/detail",
    component:AttendeeDetailComponent
  },
  {
    path: "sponsors",
    component:SponsorsComponent
  },
  {
    path: "notification",
    component:NotificationComponent
  },
  {
    path: "message",
    component:MessageComponent
  },
  {
    path: "profile",
    component:ProfileComponent
  },
  {
    path: "sponsor-attendee",
    component:SponsorAttendeesComponent
  },
  {
    path: "about-event",
    component:AboutEventComponent
  },
];

const AUTHLAYOUT_ROUTES: Routes = [  
  {
    path: "",
    component: LoginComponent
  }
];

const routes: Routes = [
  {
    path: "",
    component: AuthLayoutComponent,
    children: AUTHLAYOUT_ROUTES
  },
  {
    component: AppLayoutComponent,
    path: "dashboard",
    children: APPLAYOUT_ROUTES
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
