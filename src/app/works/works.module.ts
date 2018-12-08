import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksComponent } from './works.component';
import { AimoveComponent } from './aimove/aimove.component';
import { RouterModule } from '@angular/router';
import {MatButtonModule, MatCardModule, MatIconModule, MatTabsModule} from '@angular/material';
import { ProjectsComponent } from './projects/projects.component';
import {MachineLearningModule} from './aimove/machine-learning/machine-learning.module';
import {RobotProgrammationModule} from './aimove/robot-programmation/robot-programmation.module';
import {GestureRecognitionModule} from './aimove/gesture-recognition/gesture-recognition.module';
import {ObjectDetectionModule} from './aimove/object-detection/object-detection.module';

@NgModule({
  declarations: [
    WorksComponent,
    AimoveComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    RouterModule,
    MachineLearningModule,
    RobotProgrammationModule,
    GestureRecognitionModule, ObjectDetectionModule
  ]
})
export class WorksModule { }
