import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-nagivation-controls',
  templateUrl: './nagivation-controls.component.html',
  styleUrls: ['./nagivation-controls.component.scss']
})
export class NagivationControlsComponent {

  @Output() public onPrev: EventEmitter<void> = new EventEmitter<void>();
  @Output() public onNext: EventEmitter<void> = new EventEmitter<void>();

  handlePrev(){
    this.onPrev.emit();
  }
  handleNext(){
    this.onNext.emit();
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if(event.key === 'ArrowLeft'){
      this.handlePrev();
    }
    if(event.key === 'ArrowRight'){
      this.handleNext();
    }
  }

}
