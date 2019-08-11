import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgComponent } from './ng/ng.component';
import { ListComponent } from './list/list.component';
import { ListCardComponent } from './list-card/list-card.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NgComponent,
    ListComponent,
    ListCardComponent,
    SearchFilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
