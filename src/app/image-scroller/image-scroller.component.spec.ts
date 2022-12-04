import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageScrollerComponent } from './image-scroller.component';

describe('ImageScrollerComponent', () => {
  let component: ImageScrollerComponent;
  let fixture: ComponentFixture<ImageScrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageScrollerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
