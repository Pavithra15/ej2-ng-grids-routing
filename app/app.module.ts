import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { GridAllModule, GroupService, FilterService, EditSettingsModel, ToolbarItems, PageService, SortService, EditService, ToolbarService } from '@syncfusion/ej2-ng-grids';
import { ToolbarModule } from '@syncfusion/ej2-ng-navigations';
import { AppComponent } from './app.component';
import { FirstComponent } from './first.component';
import { SecondComponent } from './second.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  {
    path: '',
    redirectTo: '/first',
    pathMatch: 'full'
  }
];

/**
 * Module
 */
@NgModule({
  imports: [
    BrowserModule,
    GridAllModule,
    ToolbarModule,
    CommonModule,

    RouterModule.forRoot(
      appRoutes,
      { useHash: true } // <-- debugging purposes only
    )
  ],
  declarations: [AppComponent, FirstComponent, SecondComponent],
  bootstrap: [AppComponent],
  providers: [GridAllModule,GroupService, EditService, FilterService, PageService, SortService, ToolbarService]
})
export class AppModule { }