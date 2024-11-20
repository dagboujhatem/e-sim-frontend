import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './layouts/home/home.component';
import {OtpComponent} from './layouts/otp/otp.component';
import {ChatDialogComponent} from './layouts/chat/chat-dialog/chat-dialog.component';
import {OtpVerificationComponent} from './layouts/otp-verification/otp-verification.component';
import {StoreMapComponent} from './layouts/store-map/store-map.component';
import {QrCodeComponent} from './layouts/qr-code/qr-code.component';
import {CommentComponent} from './layouts/comment/comment.component';
import {LoginComponent} from './layouts/login/login.component';
import {SignupComponent} from './layouts/signup/signup.component';
import {DashboardComponent} from './layouts/dashboard/dashboard.component';
import {BmwproduitsComponent} from './layouts/bmwproduits/bmwproduits.component';
import {ProfileComponent} from './layouts/profile/profile.component';
import {CategorieComponent} from './layouts/categorie/categorie.component';
import {ForgetPasswordComponent} from './layouts/forget-password/forget-password.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent} , // Votre page d'accueil
  {path:'gpt', component:ChatDialogComponent},
  {path: 'otp',component:OtpComponent },
  { path: 'verify-otp', component: OtpVerificationComponent },
  { path: 'stores', component: StoreMapComponent },
  { path: 'Qr_code/:otpCode', component: QrCodeComponent },
  { path: 'commentaire', component:CommentComponent },
  { path: 'login', component:LoginComponent},
  { path: 'signup', component:SignupComponent },
  {path:'dashbord',component:DashboardComponent},
  {path:'bmw-products',component:BmwproduitsComponent},
  {path:'editProfile',component:ProfileComponent},
  {path:'produits',component:CategorieComponent},
  {path:'forgetPassword',component:ForgetPasswordComponent},
  {path:'',redirectTo:'/home' ,pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
