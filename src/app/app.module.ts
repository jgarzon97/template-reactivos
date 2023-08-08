import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormTemplateComponent } from './components/form/form-template/form-template.component';
import { FormReactivosComponent } from './components/form/form-reactivos/form-reactivos.component';

@NgModule({
  declarations: [
    AppComponent,
    FormTemplateComponent,
    FormReactivosComponent
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
