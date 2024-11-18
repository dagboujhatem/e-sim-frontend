import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Produit {
  id: number;
  nom: string;
  description: string;
  prix: number;
  quantite: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  private apiUrl = 'http://localhost:8443/produits/produits/categorie';
  private url ='http://localhost:8443/categories';
  constructor(private http: HttpClient) {}

  // Méthode pour récupérer les produits d'une catégorie donnée
  getProduitsByCategorie(categorieId: number): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.apiUrl}/${categorieId}`);
  }
  getCategorieName(categorieId: number): Observable<string> {
    return this.http.get<string>(`${this.url}/categorie/${categorieId}/name`);
  }
}
