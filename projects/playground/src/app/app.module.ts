import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighLightDirective } from './highlight.directive';
import { NoOpenDirective } from './noopen.directive';
import { ConfirmDirective } from './confirm.directive';

@NgModule({
  declarations: [
    AppComponent , HighLightDirective , NoOpenDirective, ConfirmDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
