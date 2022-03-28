import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmorsComponent } from './armors.component';

describe('ArmorsComponent', () => {
  let component: ArmorsComponent;
  let fixture: ComponentFixture<ArmorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
