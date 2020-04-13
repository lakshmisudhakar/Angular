import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FomsComponent } from './foms/foms.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveModelFormComponent } from './reactive-model-form/reactive-model-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FomsComponent,
    TemplateFormsComponent,
    ReactiveModelFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
