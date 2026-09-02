import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { NavbarActionItemModel, NavbarItemModel } from './header.model';

@Component({
  selector: 'app-header',
  imports: [MatButtonModule, MatTooltip, MatIconModule],
  templateUrl: './header.html',
})
export class Header {
  protected readonly rating = signal(4.5);
  protected readonly navbarItems = signal<NavbarItemModel[]>([
    { title: 'خانه', value: 'home' },
    { title: 'وبلاگ', value: 'blog' },
    { title: 'درباره‌ما', value: 'aboutUs' },
    { title: 'ارتباط با ما', value: 'contactUs' },
    { title: 'قوانین و مقررات', value: 'rules' },
  ]);
  protected readonly navbarActionItems = signal<NavbarActionItemModel[]>([
    { tooltipText: 'جستجوی غذا ها', icon: 'is-search-normal', value: 'search' },
    { tooltipText: 'سبد خرید', icon: 'is-shopping-cart', value: 'shoppingCart' },
    { tooltipText: 'پروفایل', icon: 'is-user', value: 'profile' },
  ]);
}
