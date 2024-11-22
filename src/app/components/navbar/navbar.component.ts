import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ThemeService} from '../../shared/services/theme.service';
import {UserStorageService} from '../../shared/services/storage/user-storage.service';
import {PanelService} from '../../shared/services/panel.service';
import {MatMenu} from '@angular/material/menu';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {OrderService} from '../../shared/services/order.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  panelForm: FormGroup = new FormGroup({});
  actions = [
    {route: '/home', title: 'Home', icon: 'house'},
    {route: '/gpt', title: 'ChatGPT', icon: 'chat'},
  ]
  currentAction: any;
  isDarkTheme: boolean = false;
  isUserLoggedIn: boolean = false;

  constructor(private router: Router, private themeService: ThemeService,
              private panelService: PanelService,
              private fb: FormBuilder,
              private snackBar: MatSnackBar,
              private modalService: NgbModal,
              private commandService: OrderService,
              private cdr: ChangeDetectorRef,
              private userStorageService: UserStorageService) {
  }


  ngOnInit(): void {
    this.panelForm = this.fb.group({
      products: [],
      userId: [],
      username: [],
      email: [],
      address: [],
      phoneNumber: [],
      payment: [],
      totalPrice: [],
    })
    this.router.events.subscribe(event => {
      this.isUserLoggedIn = this.userStorageService.isLoggedIn();

    })
  }

  handleRoute(action: any) {
    this.currentAction + action;
    this.router.navigateByUrl(action.route);
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
  removeFromCart(index: number, event: MouseEvent): void {
    event.stopPropagation(); // Empêche la fermeture automatique

    const removedItem = this.panel.splice(index, 1);
    console.log(`${removedItem[0]?.name} removed from the cart.`);
    this.cdr.detectChanges();
  }

  increaseQuantity(index: number, event: MouseEvent): void {
    event.stopPropagation();
    this.panel[index].quantityUnit = (this.panel[index].quantityUnit || 1) + 1;

    this.cdr.detectChanges();

  }

  decreaseQuantity(index: number, event: MouseEvent): void {
    event.stopPropagation();

    if (this.panel[index].quantityUnit > 1) {
      this.panel[index].quantityUnit -= 1;
    }
    this.cdr.detectChanges();

  }

  get totalPrice(): number {
    return this.panel.reduce((sum, item) => sum + (item.price * (item.quantityUnit || 1)), 0);
  }

  closeMenu(menu: MatMenu): void {
    menu.closed.emit();
  }

  onSave() {
    console.log(this.panelForm.value)
    this.commandService.addOrder(this.panelForm.value).subscribe(res => {
      console.log(res)
      this.panelService.clearPanel();
      this.snackBar.open('Votre commande a été envoyée avec succès.', 'Fermer', {duration: 5000});

      this.modalService.dismissAll();
    })
  }

  showModal(targetModal: any, offer: any) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    console.log(this.totalPrice)
    this.panelForm.patchValue({
      totalPrice: this.totalPrice,
      products: this.panel,
      userId: this.userStorageService.getUser()
    })
  }

}
