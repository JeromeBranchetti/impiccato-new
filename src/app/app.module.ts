import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LetterComponent } from './letter/letter.component';
import { SlotComponent } from './slot/slot.component';
import { MessengerService } from './messenger.service';
import { ItalianDictionaryService } from './italian-dictionary.service';

@NgModule({
  declarations: [
    AppComponent,
    LetterComponent,
    SlotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MessengerService, ItalianDictionaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
