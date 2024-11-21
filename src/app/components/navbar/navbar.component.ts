import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ThemeService} from '../../shared/services/theme.service';
import {UserStorageService} from '../../shared/services/storage/user-storage.service';
import {PanelService} from '../../shared/services/panel.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  actions = [
    {route: '/home', title: 'Home', icon: 'house'},
    {route: '/gpt', title: 'ChatGPT', icon: 'chat'},
  ]
  currentAction: any;
  isDarkTheme: boolean = false;

  constructor(private router: Router, private themeService: ThemeService,
              private panelService:PanelService,
            private userStorageService:UserStorageService) {
              this.isUserLoggedIn=this.userStorageService?.isLoggedIn();
  }

  handleRoute(action: any) {
    this.currentAction + action;
    this.router.navigateByUrl(action.route);
  }

  isUserLoggedIn: boolean ;


  ngOnInit(): void {
    this.router.events.subscribe(event => {
      this.isUserLoggedIn = this.userStorageService.isLoggedIn();

    })
  }

  logout() {
    this.userStorageService.signOut();
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

  get panel(): any[] {
    return this.panelService.getPanel();
  }
  // Remove a product from the cart
  removeFromCart(index: number): void {
    const removedItem = this.panel.splice(index, 1);
    console.log(`${removedItem[0]?.name} removed from the cart.`);
  }
}
