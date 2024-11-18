import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';  // Ajustez le chemin d'importation en fonction de votre projet

@Component({
  selector: 'app-produits',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  categorieIds: number[] = [1, 2, 3]; // Liste des catégories
  produitsParCategorie: any = {}; // Dictionnaire pour stocker les produits par catégorie
  titresCategorie: { [key: number]: string } = {
    1: "Ooredoo routers",
    2: "Ooredoo ADSL Keys",
    3: "Ooredoo Plans"
  };

  constructor(private produitService: ProduitService) {}

  ngOnInit() {
    this.categorieIds.forEach(categorieId => {
      this.produitService.getProduitsByCategorie(categorieId).subscribe(produits => {
        this.produitsParCategorie[categorieId] = produits;
      });
    });
  }

  getTitreCategorie(categorieId: number): string {
    return this.titresCategorie[categorieId] || 'Produits de la catégorie';
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