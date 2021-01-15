import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

//Material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './static/header/header.component';
import { FooterComponent } from './static/footer/footer.component';
import { LoginComponent } from './registration/login/login.component';
import { SignUpComponent } from './registration/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountryPageComponent } from './registration/country-page/country-page.component';
import { LoginHeaderComponent } from './static/login-header/login-header.component';
import { HeaderWithShadowComponent } from './static/header-with-shadow/header-with-shadow.component';
import { FooterBlackComponent } from './static/footer-black/footer-black.component';
import { ProfessionComponent } from './registration/profession/profession.component';
import { ApplicationComponent } from './registration/application/application.component';
import { MatSelectModule } from '@angular/material/select';
import { AgencyDetailsComponent } from './registration/agency-details/agency-details.component';
import { OtpComponent } from './registration/otp/otp.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { CompanyDetailsComponent } from './registration/company-details/company-details.component';
import { ApplicationReviewComponent } from './registration/application-review/application-review.component';
import { HeaderCentreComponent } from './static/header-centre/header-centre.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    CountryPageComponent,
    LoginHeaderComponent,
    HeaderWithShadowComponent,
    FooterBlackComponent,
    ProfessionComponent,
    AgencyDetailsComponent,
    ApplicationComponent,
    OtpComponent,
    CompanyDetailsComponent,
    ApplicationReviewComponent,
    HeaderCentreComponent,
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    AppRoutingModule,
    NgbModule,
    NgOtpInputModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
