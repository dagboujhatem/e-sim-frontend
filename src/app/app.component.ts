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
  actions=[
    {route:'/home',title:'Home',icon:'house'},
    {route:'/gpt',title:'ChatGPT',icon:'chat'},
  ]
  currentAction :any;
  isDarkTheme: boolean = false;
  constructor(private router: Router,private themeService: ThemeService){}
  handleRoute(action:any){
    this.currentAction+action ;
    this.router.navigateByUrl(action.route);
  }
  isUserLoggedIn : boolean= UserStorageService.isLoggedIn();


  ngOnInit():void{
    this.router.events.subscribe( event=>{
      this.isUserLoggedIn=UserStorageService.isLoggedIn();

    })
  }
  logout(){
    UserStorageService.signOut();
    this.router.navigateByUrl('login');
  }
  navigateToSettings() {
    this.router.navigate(['/editProfile']); // Redirige vers la page de modification de profil
  }
   // Méthode pour basculer le thème et actualiser l'interface
   toggleTheme() {
    this.themeService.toggleTheme();
   document.body.classList.toggle('dark-theme', this.themeService.darkThemeEnabled);
  }

  get themeToggleText(): string {
    return this.themeService.darkThemeEnabled ? ' Activate Light Theme'
     : ' Activate Dark Theme';
  }
  get themeIcon(): string {
    return this.isDarkTheme ? 'wb_sunny' : 'brightness_3'; // Soleil ou croissant
  }

}
