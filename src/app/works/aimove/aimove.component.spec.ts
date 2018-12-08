import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AimoveComponent } from './aimove.component';

describe('AimoveComponent', () => {
  let component: AimoveComponent;
  let fixture: ComponentFixture<AimoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AimoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AimoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
