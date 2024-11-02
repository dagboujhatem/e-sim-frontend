
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DemoAngularMaterialModule } from './DemoAngularMaterialModule';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common'; 
import { provideHttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChatService } from './chat/chat.service';
import { ChatModule } from './chat/chat.module';
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';
import { OtpComponent } from './otp/otp.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { StoreMapComponent } from './store-map/store-map.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { CommentComponent } from './comment/comment.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BmwproduitsComponent } from './bmwproduits/bmwproduits.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OtpComponent,
    OtpVerificationComponent,
    StoreMapComponent,
    QrCodeComponent,
    CommentComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    BmwproduitsComponent,
    ProfileComponent,
    ThemeToggleComponent,
   
    
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
    MatIconModule,
    
],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    ChatModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}



