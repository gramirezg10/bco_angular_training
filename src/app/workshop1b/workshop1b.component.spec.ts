import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Workshop1bComponent } from './workshop1b.component';

describe('Workshop1bComponent', () => {
  let component: Workshop1bComponent;
  let fixture: ComponentFixture<Workshop1bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Workshop1bComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Workshop1bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
