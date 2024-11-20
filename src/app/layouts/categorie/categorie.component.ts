import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../shared/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  categorieIds: number[] = [1, 2, 3]; // Liste des catégories
  productsByCategory: any = {}; // Dictionnaire pour stocker les products par catégorie
  categoryTitles: { [key: number]: string } = {
    1: "Ooredoo routers",
    2: "Ooredoo ADSL Keys",
    3: "Ooredoo Plans"
  };

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.categorieIds.forEach(categoryId => {
      this.productService.getProductsByCategory(categoryId).subscribe(products => {
        this.productsByCategory[categoryId] = products;
      });
    });
  }

  getTitreCategorie(categorieId: number): string {
    return this.categoryTitles[categorieId] || 'Produits de la catégorie';
  }
  selectedOffer: any = null;
  handler:any = null ;

  // Méthode pour afficher les détails
  afficherDetails(offer: any) {
    this.selectedOffer = offer;
    const modalElement = document.getElementById('detailsModal');
    if (modalElement) {
      modalElement.style.display = 'block'; // Affiche la modal
    }
  }

  // Méthode pour fermer la modal
  // Méthode pour fermer la modal
fermerModal() {
  this.selectedOffer = null;
}
scrollLeft(listId: string) {
  const list = document.getElementById(listId);
  if (list) {
    list.scrollBy({ left: -200, behavior: 'smooth' }); // Défilement vers la gauche
  }
}
scrollRight(listId: string) {
  const list = document.getElementById(listId);
  if (list) {
    list.scrollBy({ left: 200, behavior: 'smooth' }); // Défilement vers la droite
  }
}
}
