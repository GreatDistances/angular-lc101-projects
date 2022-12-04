import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Fitzcarraldo', 'Let The Right One In', 'Ya No Estoy Aqui', 'Sorceror'];

   constructor() { }

   ngOnInit() {
   }

}
