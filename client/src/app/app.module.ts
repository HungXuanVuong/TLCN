import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AuthServiceService } from './service/auth-service.service';
import { NewsService } from './service/news.service';
import { Register1Component } from './register1/register1.component';
import { FogotpasswordComponent } from './fogotpassword/fogotpassword.component';





@NgModule({
  declarations: [
    AppComponent,
    
    // HeaderComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,

  ],
  providers: [
    AuthServiceService,
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
