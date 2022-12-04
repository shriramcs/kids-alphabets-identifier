import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { IdentifyComponent } from './identify.component';
import { LettersComponent } from './letters/letters.component';
import { TransparentInputComponent } from './transparent-input/transparent-input.component';
import { ImageScrollerComponent } from './image-scroller/image-scroller.component';
import { NagivationControlsComponent } from './nagivation-controls/nagivation-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IdentifyComponent,
    LettersComponent,
    TransparentInputComponent,
    ImageScrollerComponent,
    NagivationControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
