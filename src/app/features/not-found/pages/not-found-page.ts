import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  imports: [RouterLink],
  template: `
    <h1>404 · Página no encontrada</h1>
    <a routerLink="/">Volver al inicio</a>
  `,
})
export class NotFoundPage {}