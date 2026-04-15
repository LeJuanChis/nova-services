import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, shareReplay } from 'rxjs';
import { ServiceItem } from '../models/service-item.model';

@Injectable({
  providedIn: 'root',
})
// Servicio para manejar los datos de los servicios que vienen desde un JSON
export class ServicesDataService {
  private http = inject(HttpClient);

  private services$ = this.http
    .get<ServiceItem[]>('data/services.json')
    .pipe(shareReplay(1));

  getServices(): Observable<ServiceItem[]> {
    return this.services$;
  }

  getFeaturedServices(): Observable<ServiceItem[]> {
    return this.services$.pipe(map(items => items.filter(item => item.featured)));
  }

  getServiceBySlug(slug: string): Observable<ServiceItem | undefined> {
    return this.services$.pipe(map(items => items.find(item => item.slug === slug)));
  }
}
