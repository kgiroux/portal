import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { PersonalRecordComponent } from './personal-record.component';
import {MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule
  ],
  declarations: [ProjectsComponent, ResumeComponent, PersonalRecordComponent],
  exports: [PersonalRecordComponent]
})
export class PersonalRecordModule { }
