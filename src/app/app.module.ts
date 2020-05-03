import { AuthorsComponent } from './authors/authors.component';

import { AuthorServices } from './authors/authors.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    EventBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthorServices],/* dependency Modules or servies */
  bootstrap: [AppComponent]
})
export class AppModule { }
