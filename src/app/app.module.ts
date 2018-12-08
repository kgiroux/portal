import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatButtonModule, MatMenuModule} from '@angular/material';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { SubscribeModule } from './subscribe/subscribe.module';
import { DofustuffModule} from './dofustuff/dofustuff.module';
import { WorksModule} from './works/works.module';
import {WorksComponent} from './works/works.component';
import {DofustuffComponent} from './dofustuff/dofustuff.component';
import { HomeComponent } from './home/home.component';
import {ProjectsComponent} from './works/projects/projects.component';
import {AimoveComponent} from './works/aimove/aimove.component';
import {PersonalRecordComponent} from './personal-record/personal-record.component';
import {ProjectsComponent as ProjectPersonalRecordComponent} from './personal-record/projects/projects.component';
import {ResumeComponent} from './personal-record/resume/resume.component';
import {PersonalRecordModule} from './personal-record/personal-record.module';
import {AuthenticationGuard} from './authentication.guard';
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'subscribe', component: SubscribeComponent },
  { path: 'dofustuff', component: DofustuffComponent, canActivate: [AuthenticationGuard] },
  { path: 'works', component: WorksComponent, children : [
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'aimove',
        component : AimoveComponent
      }
    ]},
  {
    path: 'personal-record',
    component: PersonalRecordComponent,
    children : [{
      path : 'projects',
      component: ProjectPersonalRecordComponent
    },
      {
        path: 'resume',
        component: ResumeComponent
      }]
  }

];

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    LoginModule,
    DofustuffModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SubscribeModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        blacklistedRoutes: [
          'localhost:8080/users/authenticate'
        ],
        whitelistedDomains: [ 'localhost:8080']
      }
    }),
    WorksModule,
    PersonalRecordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
