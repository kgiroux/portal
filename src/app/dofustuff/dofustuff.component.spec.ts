import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DofustuffComponent } from './dofustuff.component';

describe('DofustuffComponent', () => {
  let component: DofustuffComponent;
  let fixture: ComponentFixture<DofustuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DofustuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DofustuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
