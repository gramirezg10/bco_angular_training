import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Workshop1aComponent } from './workshop1a.component';

describe('Workshop1aComponent', () => {
  let component: Workshop1aComponent;
  let fixture: ComponentFixture<Workshop1aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Workshop1aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Workshop1aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
