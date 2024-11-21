import {Injectable} from '@angular/core';
import {Products} from '../model/product.types';

@Injectable({
  providedIn: 'root'
})
export class PanelService {
  private panel: any[] = [];

  constructor() {
  }


  AddToPanel(product: Products): void {
    if (!product || typeof product.id === 'undefined') {
      console.error('Invalid product. Cannot add to the panel.');
      return;
    }

    if (!this.panel.some((item) => item.id === product.id)) {
      this.panel.push(product);
      console.log(`${product.name} added to the panel.`);
    } else {
      console.log(`${product.name} is already in the panel.`);
    }
  }
  getPanel(): any[] {
    return this.panel;
  }

  clearPanel(): void {
    this.panel = [];
  }
}
