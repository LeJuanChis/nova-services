import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { ServicesDataService } from '../../../../core/services/services-data.service';

@Component({
  selector: 'app-service-detail',
  imports: [AsyncPipe, CurrencyPipe, RouterLink],
  templateUrl: './service-detail.html',
  styleUrl: './service-detail.css',
})
export class ServiceDetail {
  // Inyectamos los servicios y el route
  private route = inject(ActivatedRoute);
  private servicesDataService = inject(ServicesDataService);

  // Obtenemos el servicio basandonos en su slug que viene desde la URL
  service$ = this.route.paramMap.pipe(
    switchMap(params => this.servicesDataService.getServiceBySlug(params.get('slug') ?? ''))
  );
}
