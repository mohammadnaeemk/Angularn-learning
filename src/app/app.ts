import { Component } from '@angular/core';
import { Header } from './layout/header/header';
import { FoodCart } from './features/foodCards/food-cart';

@Component({
  selector: 'app-root',
  imports: [Header, FoodCart],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
