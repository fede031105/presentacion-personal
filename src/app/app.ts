import { Component } from '@angular/core';
import { Presentacion } from './presentacion/presentacion';

@Component({
  selector: 'app-root',
  imports: [Presentacion],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}