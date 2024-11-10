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
  { nom: 'BMW Série 5', prix: 125.000, image: 'https://bmw.scene7.com/is/image/BMW/bmw-5-series-overview-g60-bev?wid=3000&hei=3000', description: 'BMW Série 5 d\'occasion en excellent état.' },
  { nom: 'BMW X3', prix: 130.000, image: 'https://cdn.motor1.com/images/mgl/40EePk/s1/bmw-x3-2024-mit-bmw-m-performance-parts.jpg', description: 'BMW X3 d\'occasion avec de l\'espace et du confort.' },
  { nom: 'BMW X2 20i', prix: 145.000, image: 'https://stock.j.layershift.co.uk/_files/vehicles/BJ72_0_1.jpg', description: 'Kilométrage:62.000'},
  { nom: 'PORSCHE Macan', prix:  365.000, image: 'https://stock.j.layershift.co.uk/_files/vehicles/BJ74_0_1.jpg', description: 'Kilométrage:30.000'},
  { nom: 'BMW Série 4 F36 Gran Coupé', prix:  141.000, image: 'https://stock.j.layershift.co.uk/_files/vehicles/Bj51_0_1.jpg', description: 'Kilométrage:74.193'},
  { nom: 'BMW Série 4 F36 Gran Coupé', prix:  130.000, image: 'https://stock.j.layershift.co.uk/_files/vehicles/Bj69_0_20240924_160912.jpg', description: 'Kilométrage:86.000'},
  
  // Ajoutez d'autres voitures d'occasion ici
];

accessoires = [
  { nom: 'Tapis de sol BMW', prix: 50, image: 'https://accessoires.bmw.fr/images/accessoires-v2/51472469121-tapis-de-sol-tous-temps-avant-1.jpg', description: 'Tapis de sol en caoutchouc BMW.' },
  { nom: 'Housse de siège BMW', prix: 70, image: 'https://www.cdiscount.com/pdt2/7/6/3/2/700x700/auc5902538299763/rw/cm-g-noir-gris-housses-de-sieges-universelles-co.jpg', description: 'Housse de siège BMW en cuir.' },
  { nom: 'Kit Accessoires BMW (10 pièces)', prix: 59, image: 'https://kittechnologie.com/cdn/shop/products/p_3_2_3_2_3232-Kit-Accessoires-BMW-10-pieces.jpg?v=1704379100&width=516', description: 'Ensemble d’Accessoire intérieur auto 10pcs' },
  { nom: 'BMW waterBlade', prix: 150, image: 'https://www.bmw.com.sg/content/dam/bmw/common/accessories/images/a23_ext_water_blade_DI21_000027058.jpg.asset.1693553256120.jpg', description: 'BMW WaterBlade de haut gamme' },
  { nom: 'Jante alu BMW', prix: 100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuDvEsyOhE1oSsrB4UdzQAO2JrXHSKtZffFA&s', description: 'Jante acier 14' },
  { nom: 'Coffre de toit bmw', prix: 200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHSDJQ83ckwDG4kf05RrQQOfxa4cnqth_5-w&s', description: 'Coffre de toit Double Ouverture' },
  { nom: 'Bmw Advanced Car Eye 2', prix: 418, image: 'https://m.media-amazon.com/images/I/51t7TPMQbgL.jpg', description: 'BMW Advanced Car Eye 2.0 Caméra arrière' },
  // Ajoutez d'autres accessoires ici
];

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
ngOnInit(): void {
  this.loadStripe();
}
payNow(amount: number) {
  alert(`Initiating payment process for amount: ${amount} TND`);
  var handler = (<any>window).StripeCheckout.configure({
    key: 'pk_test_51MyjRmG1Pb689ekQXSnaNb3T5zlM4AtWEw9ilaAeGxy07b4tVsjUyEqek0oRllNtoEhFkZ6TSx6JY6lww6sQTM5s00LO1tBdGY',
    locale: 'auto',
    token: function (token: any) {
      console.log(token);
      alert(`The payment has been processed successfully!`);
    },
    closed: () => {
      console.log('Payment window closed');
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
      console.log('Stripe script loaded successfully');
      this.handler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_51MyjRmG1Pb689ekQXSnaNb3T5zlM4AtWEw9ilaAeGxy07b4tVsjUyEqek0oRllNtoEhFkZ6TSx6JY6lww6sQTM5s00LO1tBdGY',
        locale: 'auto',
        token: (token: any) => {
          console.log(token);
          alert('Payment Success!!');
        }
      });
    };
    window.document.body.appendChild(s);
  } else {
    console.log('Stripe script already loaded');
  }
}

}
