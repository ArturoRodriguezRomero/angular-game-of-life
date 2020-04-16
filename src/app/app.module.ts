import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleGameOfLifeComponent } from './components/simple-game-of-life/simple-game-of-life.component';

@NgModule({
  declarations: [AppComponent, SimpleGameOfLifeComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
