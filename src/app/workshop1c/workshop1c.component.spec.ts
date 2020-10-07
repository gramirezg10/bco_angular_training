import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Workshop1cComponent } from './workshop1c.component';

describe('Workshop1cComponent', () => {
  let component: Workshop1cComponent;
  let fixture: ComponentFixture<Workshop1cComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Workshop1cComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Workshop1cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
