import { TitleCasePipe } from './pipes/titleCase.pipes';
import { SummaryPipe } from './pipes/summary.pipe';
import { FormsModule } from '@angular/forms';
import { AuthorsComponent } from './authors/authors.component';

import { AuthorServices } from './authors/authors.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventFilteringComponent } from './event-filtering/event-filtering.component';
import { PipesComponent } from './pipes/pipes.component';
import { FillStarComponent } from './fill-star/fill-star.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    EventBindingComponent,
    EventFilteringComponent,
    PipesComponent,
    SummaryPipe,
    FillStarComponent,
    TitleCasePipe,
    FavouriteComponent,
    BootstrapPanelComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthorServices],/* dependency Modules or servies */
  bootstrap: [AppComponent]
})
export class AppModule { }
