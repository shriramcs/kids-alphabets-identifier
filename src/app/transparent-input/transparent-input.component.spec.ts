import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransparentInputComponent } from './transparent-input.component';

describe('TransparentInputComponent', () => {
  let component: TransparentInputComponent;
  let fixture: ComponentFixture<TransparentInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransparentInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransparentInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
