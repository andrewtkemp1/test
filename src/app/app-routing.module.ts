import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/components/login/login.component';
import { TokenComponent } from './modules/token/components/token/token.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: TokenComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
