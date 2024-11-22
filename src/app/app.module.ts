import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient} from '@angular/common/http';
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
import {NavbarComponent} from './components/navbar/navbar.component';
import {MatLine} from '@angular/material/core';
import { MyOrdersComponent } from './layouts/my-orders/my-orders.component';
import { QrCodeComponent } from './layouts/qr-code/qr-code.component';
import { TokenInterceptor } from './shared/interceptors/TokenInterceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CategorieComponent} from './layouts/categorie/categorie.component';
import {HomeComponent} from './layouts/home/home.component';
import {StoreMapComponent} from './layouts/store-map/store-map.component';

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
    NavbarComponent,
    QrCodeComponent,
    MyOrdersComponent,
    CategorieComponent,
    HomeComponent,
    StoreMapComponent
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
   HttpClientModule,
   NgbModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    provideAnimationsAsync(),
    provideHttpClient(),

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}



