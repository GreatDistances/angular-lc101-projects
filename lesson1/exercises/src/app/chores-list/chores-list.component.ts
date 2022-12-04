import { Component, OnInit } from '@angular/core';
import { HAMMER_LOADER } from '@angular/platform-browser';

@Component({
   selector: 'chores-list',
   templateUrl: './chores-list.component.html',
   styleUrls: ['./chores-list.component.css']
})
export class ChoresListComponent implements OnInit {
   chores = ['LC101 homework', 'Ideate on Christmas presents for family', 'Finish tie-dying shirt'];

   constructor() { }

   ngOnInit() {
   }

}