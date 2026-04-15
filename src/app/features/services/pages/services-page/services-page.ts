import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { FavoritesService } from '../../../favorites/services/favorites.service';
import { ServicesDataService } from '../../../../core/services/services-data.service';

interface ServiceCategory {
  id: string;
  label: string;
}

@Component({
  selector: 'app-services-page',
  imports: [AsyncPipe, CurrencyPipe, RouterLink],
  templateUrl: './services-page.html',
  styleUrl: './services-page.css',
})
export class ServicesPage {
  // Inyectamos los servicios necesarios para obtener los datos y manejar los favoritos
  private servicesDataService = inject(ServicesDataService);
  private favoritesService = inject(FavoritesService);

  // Definimos las categorias
  categories: ServiceCategory[] = [
    { id: 'all', label: 'Todos' },
    { id: 'cloud', label: 'Nube' },
    { id: 'education', label: 'Educación' },
    { id: 'software-development', label: 'Desarrollo de Software' },
    { id: 'ui-ux', label: 'UI/UX' },
  ];

  activeCategory = 'all';
  services$ = this.servicesDataService.getServices();
  filteredServices$ = this.services$;

  // Seleccionamos la categoria
  selectCategory(categoryId: string): void {
    this.activeCategory = categoryId;
    this.filteredServices$ = this.services$.pipe(
      map(items => categoryId === 'all' ? items : items.filter(item => item.category === categoryId))
    );
  }

  // Manejamos los favoritos, hacemos toggle cuando un servicio es o no favorito
  toggleFavorite(id: number): void {
    this.favoritesService.toggleFavorite(id);
  }

  isFavorite(id: number): boolean {
    return this.favoritesService.isFavorite(id);
  }
}
