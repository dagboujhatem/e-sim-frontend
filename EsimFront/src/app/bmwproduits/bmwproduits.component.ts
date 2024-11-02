import { Component } from '@angular/core';

@Component({
  selector: 'app-bmwproduits',
  templateUrl: './bmwproduits.component.html',
  styleUrl: './bmwproduits.component.css'
})
export class BmwproduitsComponent {

  // Données pour les voitures et accessoires BMW
voituresNeuves = [
  { nom: 'BMW X1 sDrive18i SAV', prix: 221.900, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhXwlJhDV11Lhs_SF1mgmSsK6Ruw882ebyA&s' },
  { nom: 'BMW 218i', prix: 165.000, image: 'https://images.caradisiac.com/logos/2/6/3/9/262639/S8-essai-bmw-218i-gran-coupe-2020-la-petite-grande-berline-en-habits-basiques-185643.jpg', description: 'Puissance: 103 kW 140 HP, Acceleration :8.7s (0-100km/h)' },
  { nom: 'BMW 118i', prix: 181.500, image: 'https://images.caradisiac.com/logos/8/5/4/8/258548/S8-essai-bmw-118i-faute-de-grives-181133.jpg', description: 'BMW Série 3 avec performance dynamique.' },
  { nom: 'BMW 116i', prix: 172.400, image: 'https://catalogue.automobile.tn/big/2023/02/46702.jpg?t=1716904828', description: 'BMW Série 3 avec performance dynamique.' },
  { nom: 'BMW 116i', prix: 172.400, image: 'https://catalogue.automobile.tn/big/2023/02/46702.jpg?t=1716904828', description: 'BMW Série 3 avec performance dynamique.' },
  // Ajoutez d'autres voitures neuves ici
];

voituresOccasion = [
  { nom: 'BMW Série 5', prix: 25000, image: 'https://www.bmw.com/content/dam/bmw/common/all-models/5-series/sedan/2022/overview/2022-bmw-5-series-sedan.png', description: 'BMW Série 5 d\'occasion en excellent état.' },
  { nom: 'BMW X3', prix: 30000, image: 'https://www.bmw.com/content/dam/bmw/common/all-models/x3/suv/2022/overview/2022-bmw-x3.png', description: 'BMW X3 d\'occasion avec de l\'espace et du confort.' },
  // Ajoutez d'autres voitures d'occasion ici
];

accessoires = [
  { nom: 'Tapis de sol BMW', prix: 50, image: 'https://www.bmw.com/content/dam/bmw/common/accessories/tapis.png', description: 'Tapis de sol en caoutchouc BMW.' },
  { nom: 'Housse de siège BMW', prix: 70, image: 'https://www.bmw.com/content/dam/bmw/common/accessories/housse.png', description: 'Housse de siège BMW en cuir.' },
  // Ajoutez d'autres accessoires ici
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
