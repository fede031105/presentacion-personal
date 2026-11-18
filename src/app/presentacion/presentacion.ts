import { Component } from '@angular/core';

@Component({
  selector: 'app-presentacion',
  imports: [],
  templateUrl: './presentacion.html',
  styleUrl: './presentacion.css'
})
export class Presentacion {
  nombre: string = 'Federico Sánchez Ibarra';
  edad: number = 21;
  carrera: string = 'Ingeniería en Sistemas Computacionales';
  semestre: number = 7;
  institucion: string = 'UPIIZ - IPN';
  correo: string = 'fsanchezi2300@alumno.ipn.mx';
  descripcion: string = 'Estudiante de ingeniería enfocado en el desarrollo backend con Java y Spring Boot, arquitectura de redes y despliegue en la nube.';
  habilidades: string[] = [
    'Java & Spring Boot',
    'MySQL & Bases de Datos',
    'Docker & Render',
    'Redes & Cisco Packet Tracer',
    'Angular'
  ];
  idiomas: string[] = ['Español', 'Inglés'];
  intereses: string[] = [
    'Desarrollo de APIs RESTful',
    'Diseño textil y confección',
    'Cabalgatas y ganadería',
    'Gastronomía tradicional'
  ];
  githubUrl: string = 'https://github.com/fede031105';
}