import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/user/register/register.component';
import { AuthComponent } from './pages/user/auth/auth.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
