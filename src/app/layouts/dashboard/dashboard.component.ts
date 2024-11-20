import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../../shared/services/product.service';
import {forkJoin, map} from 'rxjs';
import {Products} from '../../shared/model/product.types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  routers: Products[] = [];
  adslKeys: Products[] = [];
  ooredooPlans: Products[] = [];

  constructor(private router: Router,
              private productService: ProductService) {
  }

  // Données pour les routeurs, clés ADSL et forfaits


  selectedOffer: any = null;
  handler: any = null;

  ngOnInit(): void {

    forkJoin([
      this.productService.getProductsByCategory(1),
      this.productService.getProductsByCategory(2),
      this.productService.getProductsByCategory(3),
    ]).subscribe((routers: any) => {
      this.routers = routers[0];
      this.adslKeys = routers[1];
      this.ooredooPlans = routers[2];
    });

    this.loadStripe();

  }

  // Méthode pour afficher les détails
  afficherDetails(offer: any) {
    this.selectedOffer = offer;
    const modalElement = document.getElementById('detailsModal');
    if (modalElement) {
      modalElement.style.display = 'block'; // Affiche la modal
    }
  }

  fermerModal() {
    this.selectedOffer = null;
  }

  navigateToBMWProducts() {
    this.router.navigate(['/bmw-products']); // Redirige vers la page des produits BMW
  }

  scrollLeft(listId: string) {
    const list = document.getElementById(listId);
    if (list) {
      list.scrollBy({left: -200, behavior: 'smooth'}); // Défilement vers la gauche
    }
  }

  scrollRight(listId: string) {
    const list = document.getElementById(listId);
    if (list) {
      list.scrollBy({left: 200, behavior: 'smooth'}); // Défilement vers la droite
    }
  }


  payNow(amount: number) {
    alert(`Initiating payment process for amount: ${amount} TND`);
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51MyjRmG1Pb689ekQXSnaNb3T5zlM4AtWEw9ilaAeGxy07b4tVsjUyEqek0oRllNtoEhFkZ6TSx6JY6lww6sQTM5s00LO1tBdGY',
      locale: 'auto',
      token: function (token: any) {
        alert(`The payment has been processed successfully!`);
      },
      closed: () => {
      }
    });

    handler.open({
      name: 'Payment',
      description: `Payment for product`,
      amount: amount * 100,
    });
  }

  loadStripe() {
    if (!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51MyjRmG1Pb689ekQXSnaNb3T5zlM4AtWEw9ilaAeGxy07b4tVsjUyEqek0oRllNtoEhFkZ6TSx6JY6lww6sQTM5s00LO1tBdGY',
          locale: 'auto',
          token: (token: any) => {
            alert('Payment Success!!');
          }
        });
      };
      window.document.body.appendChild(s);
    }
  }

  navigateToProduits() {
    this.router.navigate(['/produits']); // Redirige vers la page des produits BMW
  }
}
