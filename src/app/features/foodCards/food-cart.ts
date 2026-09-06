import { Component, signal } from '@angular/core';
import { RecipeModel } from '../../models';
import { MOCK_RECIPES } from '../../mock-recipes';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  templateUrl: 'food-cart.html',
  styleUrl: 'food-cart.css',
  selector: 'app-food-cart',
  imports: [MatTableModule, MatIconModule],
})
export class FoodCart {
  protected readonly MOC_DATA = signal<RecipeModel[]>(MOCK_RECIPES);
  protected activeIndex = signal<number>(Math.floor(Math.random() * MOCK_RECIPES.length) as number);
  protected readonly selectedFood = signal<RecipeModel>(this.MOC_DATA()[this.activeIndex()]);
  protected readonly displayedColumns: string[] = ['id', 'name', 'quantity', 'unit'];

  changeFood(moveAction: 'Next' | 'Back') {
    switch (moveAction) {
      case 'Next':
        this.activeIndex.update((value) => {
          if (value != this.MOC_DATA().length - 1) {
            return value + 1;
          }
          return value;
        });
        break;
      case 'Back':
        this.activeIndex.update((value) => {
          if (value != 0) {
            return value - 1;
          }
          return value;
        });
        break;
    }
  }
}
