import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotServerStopComponent } from './robot-server-stop.component';

describe('RobotServerStopComponent', () => {
  let component: RobotServerStopComponent;
  let fixture: ComponentFixture<RobotServerStopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RobotServerStopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotServerStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
