import {Component, OnInit} from '@angular/core';
import {forkJoin} from 'rxjs';
import {Products} from '../../shared/model/product.types';
import {ProductService} from '../../shared/services/product.service';

@Component({
  selector: 'app-bmwproduits',
  templateUrl: './bmwproduits.component.html',
  styleUrl: './bmwproduits.component.css'
})
export class BmwproduitsComponent implements OnInit {

  // Données pour les voitures et accessoires BMW
  newCars: Products[] = [];

  usedCars: Products[] = [];

  accessories: Products[] = [];

  selectedOffer: any = null;
  handler: any = null;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.loadStripe();
    forkJoin([
      this.productService.getProductsByCategory(4),
      this.productService.getProductsByCategory(5),
      this.productService.getProductsByCategory(6),
    ]).subscribe((routers: any) => {
      this.newCars = routers[0];
      this.usedCars = routers[1];
      this.accessories = routers[2];
    });

  }

// Méthode pour afficher les détails
  afficherDetails(offer: any) {
    this.selectedOffer = offer;
    const modalElement = document.getElementById('detailsModal');
    if (modalElement) {
      modalElement.style.display = 'block'; // Affiche la modal
    }
  }

// Méthode pour fermer la modal
  fermerModal() {
    this.selectedOffer = null;
    const modalElement = document.getElementById('detailsModal');
    if (modalElement) {
      modalElement.style.display = 'none'; // Masque la modal
    }
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

}
