import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FavoritesService } from '../../../favorites/services/favorites.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private favoritesService = inject(FavoritesService);

  menuOpen = false;

  // Funciones toggle para el menú de navegación mobile
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  // Realizamos la cuenta de los favoritos para mostrarlos en el header.
  get favoritesCount(): number {
    return this.favoritesService.favorites().length;
  }
}
