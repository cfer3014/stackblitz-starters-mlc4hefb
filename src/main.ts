import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { LoginComponent } from './app/login.component';
import { DashboardComponent } from './app/dashboard.component';
import { provideRouter, Routes } from '@angular/router';
import { authGuard } from './app/auth.guard';
import { RouterOutlet } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [authGuard]
  }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
