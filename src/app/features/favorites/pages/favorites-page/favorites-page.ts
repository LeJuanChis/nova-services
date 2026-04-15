import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-favorites-page',
  imports: [RouterLink],
  templateUrl: './favorites-page.html',
  styleUrl: './favorites-page.css',
})
export class FavoritesPage {
  private favoritesService = inject(FavoritesService);

  favorites = this.favoritesService.favorites;
  hasFavorites = computed(() => this.favorites().length > 0);

  removeFavorite(id: number): void {
    this.favoritesService.removeFavorite(id);
  }

}
