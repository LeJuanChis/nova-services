import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './features/shared/layout/header/header';
import { Footer } from './features/shared/layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
