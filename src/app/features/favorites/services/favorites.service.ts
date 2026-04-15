import { Injectable, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ServiceItem } from '../../../core/models/service-item.model';
import { ServicesDataService } from '../../../core/services/services-data.service';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private readonly storageKey = 'neo_favorites';
  private servicesDataService = inject(ServicesDataService);

  private allServices = toSignal(this.servicesDataService.getServices(), {
    initialValue: [] as ServiceItem[],
  });

  private favoriteIds = signal<number[]>(this.loadFavorites());

  favorites = computed(() => {
    const ids = this.favoriteIds();
    return this.allServices().filter(service => ids.includes(service.id));
  });

  isFavorite(id: number): boolean {
    return this.favoriteIds().includes(id);
  }

  toggleFavorite(id: number): void {
    const current = this.favoriteIds();
    const updated = current.includes(id)
      ? current.filter(item => item !== id)
      : [...current, id];

    this.favoriteIds.set(updated);
    localStorage.setItem(this.storageKey, JSON.stringify(updated));
  }

  removeFavorite(id: number): void {
    const updated = this.favoriteIds().filter(item => item !== id);
    this.favoriteIds.set(updated);
    localStorage.setItem(this.storageKey, JSON.stringify(updated));
  }
  private loadFavorites(): number[] {
    if (typeof window === 'undefined') {
      return [];
    }

    const raw = localStorage.getItem(this.storageKey);

    if (!raw) {
      return [];
    }

    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed)
        ? parsed.filter(id => typeof id === 'number')
        : [];
    } catch {
      return [];
    }
  }
}
