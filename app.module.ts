import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SearchComponent } from './components/navbar/search/search.component';
import { ToolbarComponent } from './components/navbar/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuComponent } from './components/sidebar/menu/menu.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationItemComponent } from './components/notification-item/notification-item.component';
import { ConferenceCardComponent } from './components/conference-card/conference-card.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule} from '@angular/material/card';
import { MatDatepickerModule} from '@angular/material/datepicker'
import { ScreenService } from './services/screen.service';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SwitchComponent } from './components/switch/switch.component';
import { PersonImageComponent } from './components/person-image/person-image.component';
import { HttpClientModule } from '@angular/common/http';
import { AttendeeDirectoryComponent } from './pages/attendee-directory/attendee-directory.component';
import { SponsorsComponent } from './pages/sponsors/sponsors.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { MessageComponent } from './pages/message/message.component';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NotesComponent } from './components/notes/notes.component';
import { VideoThumbnailComponent } from './components/video-thumbnail/video-thumbnail.component';
import { Agenda2Component } from './pages/agenda2/agenda2.component';
import { SponsorAttendeesComponent } from './pages/sponsor-attendees/sponsor-attendees.component';
import { AttendeeDetailComponent } from './pages/attendee-detail/attendee-detail.component';
import { AboutEventComponent } from './pages/about-event/about-event.component';
import { FilterComponent } from './components/filter/filter.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    NavbarComponent,
    DashboardComponent,
    SearchComponent,
    ToolbarComponent,
    SidebarComponent,
    MenuComponent,
    NotificationItemComponent,
    ConferenceCardComponent,
    EventCardComponent,
    AuthLayoutComponent,
    LoginComponent,
    AgendaComponent,
    SearchbarComponent,
    SwitchComponent,
    PersonImageComponent,
    AttendeeDirectoryComponent,
    SponsorsComponent,
    NotificationComponent,
    MessageComponent,
    ChatMessageComponent,
    ProfileComponent,
    NotesComponent,
    VideoThumbnailComponent,
    Agenda2Component,
    SponsorAttendeesComponent,
    AttendeeDetailComponent,
    AboutEventComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,    
    MatFormFieldModule, 
    MatGridListModule,
    MatCardModule,
    MatNativeDateModule,   
    MatDatepickerModule,
    HttpClientModule   
  ],
  providers: [ScreenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
