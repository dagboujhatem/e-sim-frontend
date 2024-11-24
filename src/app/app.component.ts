import {Component, OnInit} from '@angular/core';
import {UserStorageService} from './shared/services/storage/user-storage.service';
import {ADMIN, ESIM_USER, USER} from './shared/constants/app-constants';
import {ThemeService} from './shared/services/theme.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  showSidebar: boolean = false;
  isDarkTheme: boolean = false;
  routers = [
    {url: '', title: 'Categories', icon: '', class:''},
    {url: '/admin/show-categories', title: 'Show categories', icon: 'list', class:'ms-5'},
    {url: '/admin/add-category', title: 'Add category', icon: 'add', class:'ms-5'},
    {url: '', title: 'Product', icon: '', class:''},
    {url: '/admin/show-products', title: 'Show products', icon: 'list', class:'ms-5'},
    {url: '/admin/add-product', title: 'Add product', icon: 'add', class:'ms-5'},
    {url: '', title: 'Order', icon: '', class:''},
    {url: '/admin/manage-orders', title: 'Manage orders', icon: 'add', class:'ms-5'},
  ]
  constructor(private userStorageService: UserStorageService,
              private router: Router,
              private themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.userStorageService.user$.subscribe((user) => {
      if (user) {
        this.showSidebar = user.role.includes(ADMIN);
      } else {
        this.showSidebar = false;
      }
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    document.body.classList.toggle('dark-theme', this.themeService.darkThemeEnabled);
  }

  get themeIcon(): string {
    return this.isDarkTheme ? 'wb_sunny' : 'brightness_3'; // Soleil ou croissant
  }

  get themeToggleText(): string {
    return this.themeService.darkThemeEnabled ? ' Activate Light Theme'
      : ' Activate Dark Theme';
  }

  logout() {
    this.userStorageService.signOut();
    this.router.navigateByUrl('login');
  }

}
