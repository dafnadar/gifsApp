import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './components/message/message.component';
import { GifComponent } from './components/gif/gif.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import {HttpClientModule} from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { HistoryPageComponent } from './pages/history-page/history-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    GifComponent,
    SignupPageComponent,
    LoginPageComponent,
    HomePageComponent,
    FormComponent,
    HistoryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
