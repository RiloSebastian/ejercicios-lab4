import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'ejercicios-lab4';
	public edad1: number;
	public edad2: number;
	public promedio: number;
	public suma: number;

	public calcular() {
		this.suma = this.edad1 + this.edad2;
		this.promedio = (this.suma / 2);
	}

	public limpiar() {

	}
}
