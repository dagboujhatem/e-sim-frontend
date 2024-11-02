import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OtpComponent } from './otp/otp.component';
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { StoreMapComponent } from './store-map/store-map.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { CommentComponent } from './comment/comment.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BmwproduitsComponent } from './bmwproduits/bmwproduits.component';
import { ProfileComponent } from './profile/profile.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent} , // Votre page d'accueil
  {path:'gpt', component:ChatDialogComponent},
  {path: 'otp',component:OtpComponent },
  { path: 'verify-otp', component: OtpVerificationComponent },
  { path: 'stores', component: StoreMapComponent },
  { path: 'Qr_code', component: QrCodeComponent },
  { path: 'commentaire', component:CommentComponent },
  { path: 'login', component:LoginComponent},
  { path: 'signup', component:SignupComponent },
  {path:'dashbord',component:DashboardComponent},
  {path:'bmw-products',component:BmwproduitsComponent},
  {path:'editProfile',component:ProfileComponent},
  {path:'theme',component:ThemeToggleComponent},
  {path:'',redirectTo:'/home' ,pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
