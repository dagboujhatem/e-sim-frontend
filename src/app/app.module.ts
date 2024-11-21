import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, provideHttpClient} from '@angular/common/http';
import {GoogleMapsModule} from '@angular/google-maps';
import {SignupComponent} from './layouts/signup/signup.component';
import {ChatModule} from './layouts/chat/chat.module';
import {DemoAngularMaterialModule} from './shared/DemoAngularMaterialModule';
import {ProfileComponent} from './layouts/profile/profile.component';
import {OtpComponent} from './layouts/otp/otp.component';
import {OtpVerificationComponent} from './layouts/otp-verification/otp-verification.component';
import {LoginComponent} from './layouts/login/login.component';
import {ForgetPasswordComponent} from './layouts/forget-password/forget-password.component';
import {BmwproduitsComponent} from './layouts/bmwproduits/bmwproduits.component';
import {CommentComponent} from './layouts/comment/comment.component';
import {DashboardComponent} from './layouts/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatLine} from '@angular/material/core';
import {AuthInterceptor} from './shared/interceptors/AuthInterceptor';


@NgModule({
  declarations: [
    SignupComponent,
    ProfileComponent,
    OtpComponent,
    OtpVerificationComponent,
    LoginComponent,
    ForgetPasswordComponent,
    BmwproduitsComponent,
    CommentComponent,
    DashboardComponent,
    AppComponent,
    NavbarComponent
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    DemoAngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    ChatModule,
    GoogleMapsModule,
    MatLine,

  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}



