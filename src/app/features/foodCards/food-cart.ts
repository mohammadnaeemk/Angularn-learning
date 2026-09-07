import { Component, signal } from '@angular/core';
import { RecipeModel } from '../../models';
import { MOCK_RECIPES } from '../../mock-recipes';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  templateUrl: 'food-cart.html',
  styleUrl: 'food-cart.css',
  selector: 'app-food-cart',
  imports: [
    MatTableModule,
    MatIconModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class FoodCart {
  protected readonly MOC_DATA = signal<RecipeModel[]>(MOCK_RECIPES());
  protected activeIndex = signal<number>(Math.floor(Math.random() * MOCK_RECIPES().length));
  protected readonly displayedColumns: string[] = ['id', 'name', 'quantity', 'unit'];
  protected readonly searchTerm = signal('');

  protected changeFood(moveAction: 'Next' | 'Back'): void {
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
