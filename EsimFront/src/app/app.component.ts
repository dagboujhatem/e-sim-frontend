import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserStorageService } from './services/storage/user-storage.service';
import { ThemeService } from './services/theme.service';



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
  isDarkTheme = localStorage.getItem('theme') === 'dark';
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
  toggleTheme(event: Event): void {
    this.isDarkTheme = (event.target as HTMLInputElement).checked;
    this.themeService.toggleTheme(this.isDarkTheme);
    localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light'); // Enregistrement du thème dans localStorage
  }
  anotherAction(event: Event) {
    this.toggleTheme(event);
  }
}
