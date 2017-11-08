import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InfiniteScrollerDirective } from './infinite-scroller.directive';
import { HackerNewsService } from './hacker-news.service';

@NgModule({
  declarations: [
    AppComponent,
    InfiniteScrollerDirective
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [HackerNewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
