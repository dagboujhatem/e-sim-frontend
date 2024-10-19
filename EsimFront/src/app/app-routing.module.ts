import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent} , // Votre page d'accueil
  {path:'gpt', component:ChatDialogComponent},
  {path: 'otp',component:ChatDialogComponent },
  {path:'',redirectTo:'/home' ,pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
