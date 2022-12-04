import { Component, ElementRef, ViewChild } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { MOCK } from 'src/MOCK';
import { LetterI } from '../models/models';

@Component({
  selector: 'app-image-scroller',
  templateUrl: './image-scroller.component.html',
  styleUrls: ['./image-scroller.component.scss']
})
export class ImageScrollerComponent {
  @ViewChild("inputRef") inputField!: ElementRef<HTMLInputElement>;
  public inputValue: string = '';
  public backgroundUrl = '';
  public alphabets: LetterI[] = MOCK;
  public currentIndex: number = 0;
  
  public handlePrev(){
    if(this.currentIndex > 0){
      this.currentIndex--;
    } else {
      console.error('User is already at first letter');
    }
    this.focusOnInputField();
  }
  
  public handleNext(){
    if(this.currentIndex < (this.alphabets.length - 1)){
      this.currentIndex++;
    } else {
      console.info('User is already at last letter');
      this.showResult();
    }
    this.focusOnInputField();
  }
  public showResult(){
    const totalScore = this.alphabets.filter((item: any) => (item.value || '').toLowerCase() === item.name).length;
    this.reset();
    alert(`Scrore: ${totalScore}/${this.alphabets.length}`);
  }

  private reset(){
    this.clearResult();
    this.currentIndex = 0;
  }

  private clearInput(){
    this.inputValue = '';
  }

  private focusOnInputField(){
    this.inputField.nativeElement.focus();
  }

  private clearResult(){
    this.alphabets.forEach((item: any) => {
      item.result = null;
      item.value = '';
    });
  }
}
