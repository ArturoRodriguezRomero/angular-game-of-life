import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SimpleGameOfLifeComponent } from './components/simple-game-of-life/simple-game-of-life.component';

@NgModule({
  declarations: [AppComponent, SimpleGameOfLifeComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
