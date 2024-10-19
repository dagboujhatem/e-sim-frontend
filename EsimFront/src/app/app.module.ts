
import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    DemoAngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    ChatModule
    
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



