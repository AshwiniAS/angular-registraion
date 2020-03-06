import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

// Import canActivate guard services shared/guard/auth.guard
import { AuthGuard } from './shared/guard/auth.guard';
import { SecureInnerPagesGuard } from './shared/guard/secure-inner-pages.guard';

// export const routes: Routes = [
//   // { path: '', redirectTo: 'login', pathMatch: 'full' },
//   // { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
//   // { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
//   // { path: 'user', component: UserComponent,  resolve: { data: UserResolver}}
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: 'user', component: UserComponent },
//   { path: 'dashboard', component: DashboardComponent },
//   { path: 'forgot-password', component: ForgotPasswordComponent },
//   { path: 'verify-email-address', component: VerifyEmailComponent }
// ];

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'register', component: RegisterComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
