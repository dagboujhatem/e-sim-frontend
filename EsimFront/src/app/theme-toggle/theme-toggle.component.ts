import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  template: `
    <label>
      <input type="checkbox" (change)="toggleTheme($event)" [checked]="isDarkTheme" />
      Activer le thème sombre
    </label>
  `,
  styles: [
    `
      label {
        cursor: pointer;
      }
    `
  ]
})
export class ThemeToggleComponent {
  isDarkTheme = localStorage.getItem('theme') === 'dark';

  constructor(private themeService: ThemeService) {
    // Appliquer le thème au chargement du composant
    this.themeService.toggleTheme(this.isDarkTheme);
  }

  toggleTheme(event: Event): void {
    this.isDarkTheme = (event.target as HTMLInputElement).checked;
    this.themeService.toggleTheme(this.isDarkTheme);
    localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light'); // Enregistrement du thème dans localStorage
  }
}
