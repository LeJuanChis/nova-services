import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-neo-hero',
  imports: [RouterLink],
  templateUrl: './neo-hero.html',
  styleUrl: './neo-hero.css',
})
export class NeoHero {
  imageUrl = 'images/hero.webp';
}
