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
import {MyOrdersComponent} from './layouts/my-orders/my-orders.component';
import {AuthGuard} from './shared/guards/auth.guard';
import {ADMIN, USER} from './shared/constants/app-constants';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./layouts/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./layouts/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard],
    data: {
      role: [ADMIN]
    },
  },
  {
    path: 'gpt', component: ChatDialogComponent,
  },
  {
    path: 'orders', component: MyOrdersComponent,
    canActivate: [AuthGuard],
    data: {
      role: [ADMIN, USER]
    },
  },
  {
    path: 'otp', component: OtpComponent,
    canActivate: [AuthGuard],
    data: {
      role: [ADMIN, USER]
    },
  },
  {
    path: 'verify-otp', component: OtpVerificationComponent,
    canActivate: [AuthGuard],
    data: {
      role: [ADMIN, USER]
    },
  },
  {
    path: 'stores', component: StoreMapComponent,
    canActivate: [AuthGuard],
    data: {
      role: [ADMIN, USER]
    },
  },
  {
    path: 'Qr_code/:otpCode', component: QrCodeComponent,
    canActivate: [AuthGuard],
    data: {
      role: [ADMIN, USER]
    },
  },
  {
    path: 'commentaire', component: CommentComponent,
    canActivate: [AuthGuard],
    data: {
      role: [ADMIN, USER]
    },
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'signup', component: SignupComponent,
  },
  {
    path: 'dashbord', component: DashboardComponent,
    canActivate: [AuthGuard],
    data: {
      role: [ADMIN, USER]
    },
  },
  {
    path: 'bmw-products', component: BmwproduitsComponent,
    canActivate: [AuthGuard],
    data: {
      role: [ADMIN, USER]
    },
  },
  {
    path: 'editProfile', component: ProfileComponent,
    canActivate: [AuthGuard],
    data: {
      role: [ADMIN, USER]
    },
  },
  {
    path: 'produits', component: CategorieComponent,
    canActivate: [AuthGuard],
    data: {
      role: [ADMIN, USER]
    },
  },
  {
    path: 'forgetPassword', component: ForgetPasswordComponent,
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
