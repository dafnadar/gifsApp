import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';

const routes: Routes = [
  { path: 'signup', component: SignupPageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: ':id', component: HomePageComponent},
  { path: ':id/history', component: HistoryPageComponent},
  { path: ':id/:term', component: HomePageComponent},
  { path: '', component: HomePageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
