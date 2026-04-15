import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServicesDataService } from '../../../../core/services/services-data.service';

@Component({
  selector: 'app-featured-grid',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './featured-grid.html',
  styleUrl: './featured-grid.css',
})
export class FeaturedGrid {
  // Inyectamos el servicio y obtenemos los destacados
  private servicesDataService = inject(ServicesDataService);
  services$ = this.servicesDataService.getFeaturedServices();
}
