import { ApiservcieService } from './header-jsonserver/apiservcie.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FomsComponent } from './foms/foms.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveModelFormComponent } from './reactive-model-form/reactive-model-form.component';
import { HttpClientserviceComponent } from './http-clientservice/http-clientservice.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderJsonserverComponent } from './header-jsonserver/header-jsonserver.component';
import { HttpObservableComponent } from './http-observable/http-observable.component';
import { ObservsService} from './http-observable/observs.service';


@NgModule({
  declarations: [
    AppComponent,
    FomsComponent,
    TemplateFormsComponent,
    ReactiveModelFormComponent,
    HttpClientserviceComponent,
    HeaderJsonserverComponent,
    HttpObservableComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [ApiservcieService, ObservsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
