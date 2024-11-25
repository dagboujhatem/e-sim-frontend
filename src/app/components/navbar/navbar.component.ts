import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ThemeService} from '../../shared/services/theme.service';
import {UserStorageService} from '../../shared/services/storage/user-storage.service';
import {PanelService} from '../../shared/services/panel.service';
import {MatMenu} from '@angular/material/menu';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
  handler: any = null;
  constructor(private router: Router, private themeService: ThemeService,
              private panelService: PanelService,
              private fb: FormBuilder,
              private snackBar: MatSnackBar,
              private modalService: NgbModal,
              private commandService: OrderService,
              private cdr: ChangeDetectorRef,
              private userStorageService: UserStorageService) {
  }

  handleRoute(action: any) {
    this.currentAction + action;
    this.router.navigateByUrl(action.route);
  }
  ngOnInit(): void {
    this.panelForm = this.fb.group({
      products: [],
      userId: [],
      username: ['',Validators.required],
      email: ['',Validators.required, Validators.email],
      address: ['',Validators.required],
      phoneNumber: ['',Validators.required],
      payment: ['',Validators.required],
      totalPrice: [Validators.required],
    })
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
    return this.panelService.getPanel();}
   // Remove a product from the cart
  removeFromCart(index: number, event:MouseEvent): void {
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
    console.log(this.userStorageService.getUserId())
    this.panelForm.patchValue({
      totalPrice: this.totalPrice,
      products: this.panel,
      userId: this.userStorageService.getUserId()
    })
  }

  onPaymentMethodChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    const totalPrice = this.panelForm.get('totalPrice')?.value;
    if (selectedValue === 'online') {
      this.payNow(totalPrice);
    } else {
      alert('Cash payment selected. Please proceed manually.');
    }
  }

  payNow(totalPrice: number): void {

    alert(`Initiating payment process for amount: ${totalPrice} TND`);

    if (!(<any>window).StripeCheckout) {
      alert('Stripe is not loaded yet. Please wait.');
      return;
    }

    const handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51MyjRmG1Pb689ekQXSnaNb3T5zlM4AtWEw9ilaAeGxy07b4tVsjUyEqek0oRllNtoEhFkZ6TSx6JY6lww6sQTM5s00LO1tBdGY',
      locale: 'auto',
      token: (token: any) => {
        console.log('Payment token:', token);
        alert(`The payment has been processed successfully!`);
      },
      closed: () => {
        console.log('Stripe checkout window closed.');
      }
    });

    handler.open({
      name: 'Payment',
      description: 'Payment for order',
      amount: totalPrice*100,
      currency: 'TND',
    });
  }


}
