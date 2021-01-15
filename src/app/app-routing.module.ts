import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgencyDetailsComponent } from './registration/agency-details/agency-details.component';
import { ApplicationComponent } from './registration/application/application.component';
import { CountryPageComponent } from './registration/country-page/country-page.component';
import { LoginComponent } from './registration/login/login.component';
import { OtpComponent } from './registration/otp/otp.component';
import { ProfessionComponent } from './registration/profession/profession.component';
import { SignUpComponent } from './registration/sign-up/sign-up.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'country', component: CountryPageComponent },
  { path: 'profession', component: ProfessionComponent },
  { path: 'agency-details', component: AgencyDetailsComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'application', component: ApplicationComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
