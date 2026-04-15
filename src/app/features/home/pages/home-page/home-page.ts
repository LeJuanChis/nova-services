import { Component } from '@angular/core';
import { FeaturedGrid } from '../../components/featured-grid/featured-grid';
import { NeoHero } from '../../components/neo-hero/neo-hero';
import { SpotlightCta } from '../../components/spotlight-cta/spotlight-cta';

@Component({
  selector: 'app-home-page',
  imports: [NeoHero, FeaturedGrid, SpotlightCta],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
