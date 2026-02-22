import { Component } from '@angular/core';
import { Componenta } from './componenta/componenta';
import { Componentb } from './componentb/componentb';

@Component({
  selector: 'app-root',
  imports: [Componenta, Componentb],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'app-two-components';
}