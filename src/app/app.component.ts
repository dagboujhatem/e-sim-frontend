import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserStorageService } from './shared/services/storage/user-storage.service';
import { ThemeService } from './shared/services/theme.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EsimFront';

}
