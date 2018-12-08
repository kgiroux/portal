import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotProgrammationComponent } from './robot-programmation.component';

describe('RobotProgrammationComponent', () => {
  let component: RobotProgrammationComponent;
  let fixture: ComponentFixture<RobotProgrammationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotProgrammationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotProgrammationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
