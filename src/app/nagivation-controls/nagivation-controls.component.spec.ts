import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NagivationControlsComponent } from './nagivation-controls.component';

describe('NagivationControlsComponent', () => {
  let component: NagivationControlsComponent;
  let fixture: ComponentFixture<NagivationControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NagivationControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NagivationControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
