import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router) {}
  // Données pour les routeurs, clés ADSL et forfaits
  routeurs = [
    { nom: 'Routeur Mifi 4G prépayé', prix:99.00 , image: 'https://www.ooredoo.tn/Personal/4217-home_default/media-router-ws322.jpg', description: 'Mobile Wifi Prépayé - Sans Engagement   (التوصيل مجاني) Gratuités offertes : 75Go.' },
    { nom: 'Pack Routeur Wi-Fi', prix:110.00 , image: 'https://www.ooredoo.tn/Business/1672-large_default/sayartech.jpg', description: 'Découvrez le pack Mobile Wi-Fi à 0dt et profitez d’une connexion 24h/24 et 7j/7' },
    { nom: 'Media Router', prix: 69.000, image: 'https://www.ooredoo.tn/Personal/4217-home_default/media-router-ws322.jpg', description: 'Restez connecté en toute mobilité !' },
    { nom: 'Guide d utilisation de box', prix: 50.000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-_9tf83Z661XqLlFSXfWPxviNIrV5mNuh0w&s', description: 'Offre tres special' },
    { nom: 'Super box Pro', prix: 50.000, image: 'https://www.ooredoo.tn/Business/5843-large_default/4g-box.jpg', description: ' 4G Box Pro' },
    // Ajoutez d'autres routeurs ici
  ];

  clesAdsl = [
    { nom: 'Clé ADSL ', prix: 50, image: 'https://www.ooredoo.tn/Business/5831-large_default/fixe-jdid-pro.jpg', description: 'Clé ADSL performante.' },
    { nom: 'ADSL' , prix: 70, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgX5o6v47E-FwEfh9wZDG3cV1hVIM6KYplw&s', description: 'Clé ADSL avec haute vitesse.' },
    { nom: 'ADSL Box' , prix: 79, image: 'https://pbs.twimg.com/media/Ca8uYk0WEAASk_t.jpg', description: 'Clé ADSL avec haute vitesse.' },
    { nom: 'Clé ADSL 1', prix: 50, image: 'https://www.ooredoo.tn/Personal/img/cms/static/Image12.png', description: 'Clé ADSL performante.' },
    { nom: 'ADSL' , prix: 70, image: 'https://www.ooredoo.tn/Business/5837-large_default/adsl-pro.jpg', description: 'Clé ADSL avec haute vitesse.' },
    { nom: 'ADSL Box' , prix: 79, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEuNw-NiL9fQtsVhNtoqvhWBeii3JFBsOCkg&s', description: 'Clé ADSL avec haute vitesse.' },
  ];

  forfaits = [
    { nom: 'Forfait 1', prix: 22.5, image: 'https://kapitalis.com/tunisie/wp-content/uploads/2022/01/Ooredoo-Internet.jpg', description: 'Forfait abordable.' },
    { nom: 'Forfait 2', prix: 45 , image: 'https://www.algerie360.com/wp-content/uploads/2018/08/Photo-Haya-Switch-4.jpg', description: 'Forfait tout compris.' },
    // Ajoutez d'autres forfaits ici
  ];

  selectedOffer: any = null;

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
navigateToBMWProducts() {
  this.router.navigate(['/bmw-products']); // Redirige vers la page des produits BMW
}
  
}
